(() => {
  // Palindrome Algorithm
  const str1 = "abcd";
  const str2 = "aba";

  const result1 = str1 === str1.split("").reverse().join("");
  const result2 = str2 === str2.split("").reverse().join("");

  console.log("result1 => ", result1);
  console.log("result2 => ", result2);

  // O(N) = We go over every character in input string to reverse string.
})();
