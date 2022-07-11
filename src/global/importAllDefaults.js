
function importAll(r, dir) {
    return r.keys().map((val) =>
        import(`../MyObjects/${val.substring(2)}`)
    );
}

function importAllDefault(dir) {
    return Promise.all(importAll(require.context('../MyObjects/', false, /\.js$/))).then((val) => {
        return val.map((val) => val.default);
    });
}

export default importAllDefault;