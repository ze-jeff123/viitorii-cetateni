import posts from "./posts.json"

const flatPosts = [];

function dfs(node) {
    for (const i in node.kids) {
        flatPosts.push(node.kids[i]);
        dfs(node.kids[i]);
    }
}

dfs(posts);

export default flatPosts.filter((article)=>article.kids.length===0);