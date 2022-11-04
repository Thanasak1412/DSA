(() => {
  // Recursion
  console.log(fac(4));

  function fac(num) {
    if (num != 0) {
      return num * fac(num - 1);
    }

    return 1;
  }
})();
