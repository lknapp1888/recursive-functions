//iterative fibonacci sequence function

function fibs(num) {
  let arr = [0, 1];
  for (let i = 0; i < num - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr;
}

//recursive fibonacci sequence function

function fibsRec(num, arr = [0, 1]) {
  if (arr.length >= num) return arr;
  else {
    return fibsRec(num, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
  }
}

console.log(fibs(12));
console.log(fibsRec(10));
