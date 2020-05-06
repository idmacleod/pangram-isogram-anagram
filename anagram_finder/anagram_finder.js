const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
}

AnagramFinder.prototype.wordIsAnagramOf = function (otherWord) {
    if (otherWord.length !== this.word.length) { return false }
    const lowerOtherWord = otherWord.toLowerCase();
    if (lowerOtherWord === this.word) { return false }
    const letterArray = lowerOtherWord.split('');
    return letterArray.every(letter => this.word.includes(letter));
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(otherWord => this.wordIsAnagramOf(otherWord));
}

module.exports = AnagramFinder;
