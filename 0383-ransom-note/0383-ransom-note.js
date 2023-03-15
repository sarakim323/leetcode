/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    let storage = {};
    for (let i = 0; i < magazine.length; i++) {
        let current = magazine[i];
        if (storage[current]) {
            storage[current]++;
        } else {
            storage[current] = 1;
        }
    }
    for (let j = 0; j < ransomNote.length; j++) {
        let current = ransomNote[j];
        if (storage[current] && storage[current] !== 0) {
            storage[current]--;
        } else {
            return false;
        }
    }
    return true;
};