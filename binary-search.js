(() => {
  // Binary search

  const arr = [];

  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }

  console.log("binarySearch => ", binarySearch(arr, 10));

  function binarySearch(sortedArr, value) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midVal = sortedArr[mid];

      if (midVal === value) {
        return mid;
      } else if (midVal < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }
})();
