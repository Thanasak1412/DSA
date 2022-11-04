(() => {
  // Chunk Algorithm

  const arr = [1, 2, 3, 4, 5];
  let result = [];

  const chunk = (array, size) => {
    for (let item of array) {
      const last = result[result.length - 1];

      !last || last.length === size ? result.push([item]) : last.push(item);
    }
  };

  chunk(arr, 3);

  console.log("result => ", result);

  // Time complexity = O(N) => We go over every item in input array
  // Space complexity = O(N) => the result array that we returned back has roughly the same number of item as the input array
})();
