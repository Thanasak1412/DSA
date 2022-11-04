(() => {
  // Linear search

  // Array.find()
  // Array.includes()
  // Array.indexOf()

  // Array.find();
  const array = [1, 2, 3, 4, 5];

  function find(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i]) === true) {
        return arr[i];
      }
    }

    return undefined;
  }

  console.log(
    "find => ",
    find(array, (arr) => arr === 1)
  );

  //   Array.includes()
  function includes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) return true;
    }
    return false;
  }

  console.log("includes => ", includes(array, 5));

  //   Array.indexOf()
  function indexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) return i;
    }

    return -1;
  }

  console.log("indexOf => ", indexOf(array, 2));

  //   O(N) / Linear time complexity = is best we can do for searching an unsorted array.
})();
