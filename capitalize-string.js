(() => {
  // Capitalize Algorithm

  const str = "abc def ghi";
  const arrOfWord = str.split(" ");
  const arrOfWordCased = [];

  for (let i = 0; i < arrOfWord.length; i++) {
    const word = arrOfWord[i];

    arrOfWordCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  console.log("result => ", arrOfWordCased.join(" "));

  // O(N) = because string split method visits
  // every character in the string
  // we're saying hey is this character space is this character space
})();
