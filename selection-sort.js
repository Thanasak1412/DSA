(() => {
  // Selection Sort Algorithm

  const array = [3, 4, 5, 2, 1, 10];

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let swapIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[swapIdx]) {
          swapIdx = j;
        }
      }

      swap(arr, i, swapIdx);
    }

    return arr;
  }

  console.log("selectionSort => ", selectionSort(array));

  // Big O O(N^2)
})();
