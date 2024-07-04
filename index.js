const data = require("./data.json");

class ArabicDictionary {
  constructor() {
    this.data = data;
  }

  search(word) {
    for (let entry of this.data) {
      if (entry.Translations.en.toLowerCase() === word.toLowerCase()) {
        return {
          ArabicWord: entry.Word,
          Frequency: entry.Frequency,
        };
      }
    }
    return null;
  }
}

module.exports = ArabicDictionary;
