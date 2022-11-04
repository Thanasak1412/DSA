(() => {
  // Bubble Sort

  const array = [1, 2, 5, 6, 9, 7, 0, 3];

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }

    return arr;
  }

  console.log("bubbleSort => ", bubbleSort(array));

  // O(N^2)
})();
