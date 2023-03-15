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
    let magazineLetters = [...magazine];
    let ransomNoteLetters = [...ransomNote];
    for (let i = 0; i < magazineLetters.length; i++) {
        let current = magazineLetters[i];
        if (storage[current]) {
            storage[current]++;
        } else {
            storage[current] = 1;
        }
    }
    for (let j = 0; j < ransomNoteLetters.length; j++) {
        let current = ransomNoteLetters[j];
        if (storage[current] && storage[current] !== 0) {
            storage[current]--;
        } else {
            return false;
        }
    }
    return true;
};