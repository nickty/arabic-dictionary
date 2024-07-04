const ArabicDictionary = require("./index");

const dictionary = new ArabicDictionary();

const word = "from";
const result = dictionary.search(word);

if (result) {
  console.log(
    `The Arabic word for "${word}" is "${result.ArabicWord}" with a frequency of ${result.Frequency}.`
  );
} else {
  console.log(`The word "${word}" was not found.`);
}
