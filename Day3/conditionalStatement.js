function ifOldOrEven(N) {
  let even = N % 2 === 0;

  if(!even) console.log('Weird')
  else if(even && N <= 5) console.log("Not Weird");
  else if(even && N <= 20) console.log("Weird"); 
  else console.log('Not Weird');
}

ifOldOrEven(3);
ifOldOrEven(25);
