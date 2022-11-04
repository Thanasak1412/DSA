(() => {
  // CaesarCipher Algorithm

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shift = 100;
  const str = "abcd";
  let result = "";

  function caesarCipher(str, shift) {
    const alphabetArr = alphabet.split("");

    for (let s of str) {
      const idx = alphabetArr.indexOf(s);

      if (idx === -1) {
        result != s;
        continue;
      }

      const encodedIdx = (idx + shift) % 26;
      result += alphabet[encodedIdx];
    }

    return result;
  }

  console.log(caesarCipher(str, shift));

  // BigO => Time complexity = O(N) We must visit all characters in Input string to encode it.
  // Space complexity = O(N) Result string as long as Input string.
})();
