(() => {
  // Reverse String
  const str = "abcd";

  const result1 = str.split("").reverse().join("");

  console.log("result1 => ", result1);

  const result2 = str.split("").reduce((prev, curr) => (prev = curr + prev));

  console.log("result2 => ", result2);

  let result3 = "";

  for (let s of str) {
    result3 = s + result3;
  }

  console.log("result3 => ", result3);

  let result4 = "";

  for (let i = 0; i < str.length; i++) {
    result4 = str[i] + result4;
  }

  console.log("result4 => ", result4);

  let result5 = "";

  for (let i in str) {
    result5 = str[i] + result5;
  }

  console.log("result5 => ", result5);

  // O(N) เพราะ Input = N และจำนวนค่าที่ Return กลับไปมีค่าเท่ากับ Input
})();
