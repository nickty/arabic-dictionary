const fs = require("fs");
const path = require("path");

class ArabicDictionary {
  constructor() {
    const dataPath = path.join(__dirname, "data.json");
    this.data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
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
