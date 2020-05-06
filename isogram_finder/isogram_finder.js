const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.letterAppearsOnce = function (letterToCheck) {
    const letterArray = this.word.filter(letter => letter === letterToCheck);
    return letterArray.length === 1;
}

IsogramFinder.prototype.isIsogram = function () {
    return this.word.every(letter => this.letterAppearsOnce(letter));
}

module.exports = IsogramFinder;
