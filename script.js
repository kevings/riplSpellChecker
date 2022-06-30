import { dictionary } from "./data.js";

// get form by tag
const form = document.getElementsByTagName("form")[0];

// event listener to run our function when user hits Submit
form.addEventListener("submit", function (event) {
  const word = document.getElementById("wordToCheck").value;
  document.getElementById(
    "spellChecked"
  ).innerHTML = `The correct spelling is: ${checkWord(word)}`;
  // prevents the Submit button from refreshing page
  event.preventDefault();
});

const checkWord = (wordToCheck) => {
  // create maps and sets
  const originSet = new Set(dictionary);
  const lowerCaseMap = new Map();
  const noRepeatLettersMap = new Map();

  for (const word of dictionary) {
    // create map of dictionary with all lowercase letters
    const lowered = word.toLowerCase();
    if (!lowerCaseMap.has(lowered)) {
      lowerCaseMap.set(lowered, word);
    }

    // create map of dictionary with no repeating letters and all lowercase letters
    const noRepeatLetters = (lowered) => {
      let result = "";
      for (let i = 0; i < lowered.length; i++) {
        if (lowered[i] != lowered[i + 1]) {
          result += lowered[i];
        }
      }
      return result;
    };
    if (!noRepeatLettersMap.has(noRepeatLetters(lowered))) {
      noRepeatLettersMap.set(noRepeatLetters(lowered), word);
    }
  }

  // remove extra spaces from word
  wordToCheck = wordToCheck.replace(/\s/g, "");

  // check if incoming word is in the dictionary set
  if (originSet.has(wordToCheck)) return wordToCheck;

  // check if incoming word is in our lowercase map
  const lowered = wordToCheck.toLowerCase();
  if (lowerCaseMap.has(lowered)) {
    return lowerCaseMap.get(lowered);
  }

  // check if incoming word has is in our non repeating letters map
  const noRepeatLetters = (lowered) => {
    let result = "";
    for (let i = 0; i < lowered.length; i++) {
      if (lowered[i] != lowered[i + 1]) {
        result += lowered[i];
      }
    }
    return result;
  };
  if (noRepeatLettersMap.has(noRepeatLetters(lowered))) {
    return noRepeatLettersMap.get(noRepeatLetters(lowered));
  }

  // if incoming word is not in our set and maps
  return "No correction found";
};
