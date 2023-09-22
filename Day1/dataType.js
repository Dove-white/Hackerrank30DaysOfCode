const readLine1 = '4';
const readLine2 = '8';
const readLine3 = 'HackerRank ';

let i = 12;
let d = 4.0;
let s = 'is the best place to learn and practice coding!';

// Declare second integer, double, and String variables.
let int;
let double;
let str;

// Read and save an integer, double, and String to your variables.
int = readLine1;
double = readLine2;
str = readLine3;

// Print the sum of both integer variables on a new line.
console.log(i + Number(int));

// Print the sum of the double variables on a new line.
console.log((d + Number(double)).toFixed(1));

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(str + s);
