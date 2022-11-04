(() => {
  // FizzBuzz Algorithm

  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      let str = "";

      if (i % 3 === 0) {
        str += "fizz";
      }
      if (i % 5 === 0) {
        str += "buzz";
      }
      if (str === "") {
        str += i;
      }

      console.log("str => ", str);
    }
  }

  fizzBuzz(10);

  // O(N) = Because we have a for loop in our code that run depends on N times
})();
