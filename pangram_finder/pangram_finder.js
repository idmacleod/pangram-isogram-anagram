const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const lowerCasePhrase = this.phrase.toLowerCase();
  return this.alphabet.reduce((result, letter) => {
    return result && lowerCasePhrase.includes(letter);
  });
}

module.exports = PangramFinder;
