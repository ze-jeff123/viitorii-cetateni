
function importAll(r) {
    return r.keys().map((val) =>
        import(`../articles/${val.substring(2)}`)
    );
}

function importAllDefault() {
    return Promise.all(importAll(require.context('../articles/', true, /\.js$/))).then((val) => {
        return val.map((val) => val.default);
    });
}

export default importAllDefault;