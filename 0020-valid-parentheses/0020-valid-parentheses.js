/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let checker = [];
    let brackets = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    for (char of s) {
        if (!(char in brackets)) {
            checker.push(char);
            continue;
        }
        if (checker[checker.length - 1] === brackets[char]) {
            checker.pop();
            continue;
        }
        return false;
    }
    return (checker.length === 0);
};