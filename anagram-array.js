(() => {
  // Anagram Algorithm

  function anagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
    str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

    if (str1.length !== str2.length) return false;

    const stringASorted = str1.split("").sort().join("");
    const stringBSorted = str2.split("").sort().join("");

    return stringASorted === stringBSorted;
  }

  console.log("anagram => ", anagram("HEART", "earth!"));
  console.log(
    "anagram => ",
    anagram("tom marvolo riddle", "I am lord voldemort")
  );

  // Big O =>
  // Time complexity O(N log N) = because array.sort() behind the scene O(N log N)
  // array.split() and array.join() => don't worry about smaller terms
  // Space complexity O(N) = Sort strings as long as Input string.
})();
