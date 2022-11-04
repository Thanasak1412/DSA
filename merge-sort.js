(() => {
  // Merge Sort Algorithm

  const sortedArr1 = [1, 2];
  const sortedArr2 = [3, 4, 5, 6];

  function mergeSorted(sortedArr1, sortedArr2) {
    let p1 = 0,
      p2 = 0;
    const result = [];

    while (p1 < sortedArr1.length && p2 < sortedArr2.length) {
      if (sortedArr1[p1] < sortedArr2[p2]) {
        result.push(sortedArr1[p1]);
        p1++;
      } else {
        result.push(sortedArr2[p2]);
        p2++;
      }
    }

    while (p1 < sortedArr1.length) {
      result.push(sortedArr1[p1]);
      p1++;
    }

    while (p2 < sortedArr2.length) {
      result.push(sortedArr2[p2]);
      p2++;
    }

    return result;
  }

  console.log("mergeSorted =>", mergeSorted(sortedArr1, sortedArr2));

  // Big O => Time Complexity => O(N + M)
  // Space Complexity => O(N + M)
})();
