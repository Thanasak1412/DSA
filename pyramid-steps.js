(() => {
  // Pyramid Algorithm

  // Example =>
  // pyramid(3)
  // "  #  "
  // " ### "
  // "#####"

  function pyramid(n) {
    let result = "";
    let padding = "";
    let hashes = "";

    for (let i = 1; i <= n; i++) {
      padding = " ".repeat(n - i);
      hashes = "#".repeat(i * 2 - 1);

      result += `${padding}${hashes}${padding}\n`;
    }

    console.log(result);
    return result;
  }

  pyramid(3);

  // Big O = Time complexity => O(N^2) Outer loop runs N times
  // Inner loop run roughly N times
})();
