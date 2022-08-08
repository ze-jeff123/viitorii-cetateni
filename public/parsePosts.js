const fs = require('fs');
const path = require('path');
const metadataParser = require("markdown-yaml-metadata-parser");
const MarkdownIt = require("markdown-it");
const { parse } = require('path');

const postsRoot = 'posts/nested-posts';
const md = new MarkdownIt();

function removePreNum(sol) {
    let newSol = "",adding = 0;
    for (let i = 0; i < sol.length; i++) {
        if (!isNaN(sol[i]) || sol[i] == '-') {

        } else {
            adding = 1;
        }
        if (adding === 1) {
            newSol = newSol + sol[i];
        }
    }
    return newSol;
}

function cutPre(dir, nr) {
    let sol = "";
    for (let i = 0; i < dir.length; i++) {
        if (nr <= 0) {
            sol = sol + dir[i];
        }
        if (dir[i] === '/') {
            nr--;
        }
    }

    let newSol = "", curent="";
    for (let i = 0; i < sol.length; i++) {
        if (sol[i] == '/') {
            newSol = newSol + removePreNum(curent);
            newSol += '/';
            curent = "";
        } else {
            curent += sol[i];
        }
    }
    newSol += removePreNum(curent);
    return newSol;
}
function parsePost(dir) {
    return fs.promises.readdir(dir)
        .then((val) => {
            const slug = "articole/"+cutPre(dir,2);
            const contentList = val
                .filter((file) => path.extname(file) === '.md')
                .map((file) => {
                    return fs.promises.readFile(path.join(dir, file), { encoding: 'utf8' })
                        .then((text) => {
                            const { content, metadata } = metadataParser(text);
                            return {
                                slug: slug,
                                content: md.render(content),
                                metadata: metadata,
                            }
                        })
                });

            if (contentList.length > 0) {
                return {
                    slug : slug,
                    content: contentList[0],
    
                    kids: val
                        .filter((file => path.extname(file) !== '.md'))
                        .map((file) => parsePost(path.join(dir, file)))
    
                }
            } else {
                return {
                    slug: slug,
                    content : "root",

                    kids: val
                        .filter((file => path.extname(file) !== '.md'))
                        .map((file) => parsePost(path.join(dir, file)))
    
                }
            }

          
        })
}

let globalId = 0;

function resolveTree(tree) {
    return tree.then((tree) => {
        if (!Array.isArray(tree.kids)) {
            return tree.content.then((content) => {
                return {
                    slug: tree.slug,
                    content: content,
                    kids: [],
                    id: ++globalId,
                }
            })
        }
        return Promise.all([tree.content, ...tree.kids.map((node) => resolveTree(node))]).then((nodes) => {
            return {
                slug: tree.slug,
                content: nodes[0],
                kids: nodes.slice(1),
                id: ++globalId,
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

