function htmlToPlain(html) {
    let sum = 0,sol = "";
    for (let i = 0; i < html.length; i++) {
        if (html[i] === '<') {
            sum++;
        } else if (html[i] === '>') {
            sum--;
        } else if (sum % 2=== 0) {
            sol = sol + html[i];
        }
    }
    return sol;
}

export default htmlToPlain;