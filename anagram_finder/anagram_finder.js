const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
}

AnagramFinder.prototype.wordIsAnagramOf = function (otherWord) {
    if (otherWord.toLowerCase() === this.word || otherWord.length !== this.word.length) {
        return false;
    } else {
        const letterArray = otherWord.toLowerCase().split('');
        return letterArray.every(letter => this.word.includes(letter));
    }
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(otherWord => this.wordIsAnagramOf(otherWord));
}

module.exports = AnagramFinder;
