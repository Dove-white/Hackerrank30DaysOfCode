function reverse(arr) {
  let inReverse = arr.reverse();
  let space = "";

  for (let num of inReverse) {
    space += num + " ";
  }

  console.log(space);
}

reverse([1, 3, 2, 4]);
