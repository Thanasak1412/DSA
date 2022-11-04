(() => {
  // Average
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const avg = number.reduce((prev, curr) => prev + curr) / number.length;
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }

  let sum2 = 0;

  for (let num of number) {
    sum2 += num;
  }

  let sum3 = 0;
  for (let i in number) {
    sum3 += number[i];
  }

  let sum4 = 0;
  number.forEach((num) => {
    sum4 += num;
  });

  const num = 10;

  const average5 = (num * (num + 1)) / 2 / num;

  const average4 = sum4 / number.length;

  const average3 = sum3 / number.length;

  const average2 = sum2 / number.length;

  const average = sum / number.length;

  console.log("avg => ", avg);
  console.log("average => ", average);
  console.log("average2 => ", average2);
  console.log("average3 => ", average3);
  console.log("average4 => ", average4);
  console.log("average5 => ", average5);
})();
