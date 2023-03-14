/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// I - two strings
// O - boolean

var isAnagram = function(s, t) {
    // both strings have the same length
    // both strings have the same letters with the same occurrence
    
    // if the lengths are not the same, return false
    // convert the strings into arrays
    // sort the input strings in alphabetical order
    // check if the strings are equal to each other
    if (s.length !== t.length) {
        return false;
    }
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    if (sortedS === sortedT) {
        return true;
    } else {
        return false;
    }
};