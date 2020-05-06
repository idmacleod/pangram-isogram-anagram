const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const lowerPhrase = this.phrase.toLowerCase();
  return this.alphabet.every(letter => lowerPhrase.includes(letter));
}

module.exports = PangramFinder;
