const fs = require('fs');
const path = require('path');
const metadataParser = require("markdown-yaml-metadata-parser");
const MarkdownIt = require("markdown-it");
const { parse } = require('path');

const postsRoot = 'posts/nested-posts';
const md = new MarkdownIt();

function parsePost(dir) {
    return fs.promises.readdir(dir)
        .then((val) => {

            const contentList = val
                .filter((file) => path.extname(file) === '.md')
                .map((file) => {
                    return fs.promises.readFile(path.join(dir, file), { encoding: 'utf8' })
                        .then((text) => {
                            const { content, metadata } = metadataParser(text);
                            return {
                                content: md.render(content),
                                metadata: metadata,
                            }
                        })
                });

            if (contentList.length > 0) {
                return {
                    content: contentList[0],
    
                    kids: val
                        .filter((file => path.extname(file) !== '.md'))
                        .map((file) => parsePost(path.join(dir, file)))
    
                }
            } else {
                return {
                    content : "root",

                    kids: val
                        .filter((file => path.extname(file) !== '.md'))
                        .map((file) => parsePost(path.join(dir, file)))
    
                }
            }

          
        })
}

function resolveTree(tree) {
    return tree.then((tree) => {
        if (!Array.isArray(tree.kids)) {
            return tree.content.then((content) => {
                return {
                    content: content,
                    kids: [],
                }
            })
        }
        return Promise.all([tree.content, ...tree.kids.map((node) => resolveTree(node))]).then((nodes) => {
            return {
                content: nodes[0],
                kids: nodes.slice(1),
            }
        })
    })
}


resolveTree(parsePost(postsRoot)).then((val) => {
    fs.writeFile('src/posts.json', JSON.stringify(val), (err) => {
        if (err) {
            throw new Error(err);
        }
    });
})

