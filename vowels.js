(() => {
  // Vowels Algorithm
  // Example => vowel("abcdef") => "aeiou" = 2

  const vowel = (str) => {
    const vowels = "aeiou".split("");
    let count = 0;

    for (let s of str) {
      for (let vowel of vowels) {
        if (s === vowel) {
          count++;
        }
      }
    }

    return count;
  };

  console.log("vowel => ", vowel("abcdef"));
  console.log("vowel => ", vowel("aeiou"));

  //   Big O
  // Time complexity = O(N) because outer loop depends on N times, and inner loop run 5 times at most
  // Space complexity = O(1) that number  have constant space complexity
})();
