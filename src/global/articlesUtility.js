function makeUnique(array) {
    return [...new Set(array)];
}

function getCategories(articles) {
    return articles && makeUnique(articles.map((article) => article.category));
}

function slugify(title) {
    return title.toLowerCase().split('').map((char) => char === ' ' ? '-' : char).filter((char) => (char !== '?')).join('');
}

function slugifyArticle(article) {
    return `${slugify(article.category)}/${slugify(article.title)}`;
}
export { getCategories, slugifyArticle };