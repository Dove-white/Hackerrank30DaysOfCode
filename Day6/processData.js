function processData(input) {
  //Enter your code here
  message = input.split("\n");

  let toNum = parseInt(message[0]);

  for (let i = 0; i < toNum; i++) {
    let m = message[i + 1];
    let l = m.length;
    let arr = m.split("");

    let even = "";
    let odd = "";

    for (let j = 0; j < l; j++) {
      if (j % 2 == 0) even += arr[j];
      else odd += arr[j];
    }

    console.log(even, odd);
  }
}

let e = `3
goto
come
today`;

processData(e);
