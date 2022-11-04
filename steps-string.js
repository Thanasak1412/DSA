(() => {
  // Steps Algorithm

  // Example steps(4) =>
  // "#   "
  // "##  "
  // "### "
  // "####"

  const steps = (n) => {
    let result = "";
    for (let i = 1; i <= n; i++) {
      for (let hash = i; hash > 0; hash--) {
        result += "#";
      }
      for (let space = n - i; space > 0; space--) {
        result += " ";
      }
    }

    return result;
  };

  console.log(steps(4));

  //   BigO => Time complexity = O(N^2);

  const steps2 = (n) => {
    let result = "";

    for (let i = 1; i <= n; i++) {
      result += "#".repeat(i);
      result += " ".repeat(n - i);
    }

    return result;
  };

  console.log(steps2(3));

  //   BigO => Time complexity = O(N^2);
})();
