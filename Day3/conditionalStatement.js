function ifOldOrEven(N) {
  let even = N % 2 === 0;

  even && N <= 5
    ? console.log("Not Weird")
    : even && N <= 20
    ? console.log("Weird")
    : even && N > 20
    ? console.log("Not Weird")
    : console.log("Weird");
}

ifOldOrEven(3);
ifOldOrEven(24);
