function reverse(arr) {
  let reversedArrayString = arr.reverse();
  let space = "";

  for (let num of reversedArrayString) {
    space += num + " ";
  }

  console.log(space);
}

reverse([1, 3, 2, 4]);
