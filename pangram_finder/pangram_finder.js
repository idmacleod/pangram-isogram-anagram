const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const lowerCasePhrase = this.phrase.toLowerCase();
  return this.alphabet.every(letter => lowerCasePhrase.includes(letter));
}

module.exports = PangramFinder;
