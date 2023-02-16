//recursive merge sort algorithm

const mergeSort = function (arr) {
  if (arr.length === 0) return;
  if (arr.length === 1) return arr;
  else {
    const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    const right = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));
    return arrMerge(mergeSort(left), mergeSort(right));
  }
};

const arrMerge = function (arrOne, arrTwo) {
  let arr = [];
  let mergeLen = arrOne.length + arrTwo.length;
  for (i = 0; i < mergeLen; i++) {
    if (!arrOne[0] && !arrTwo[0]) break;
    if (arrOne[0] < arrTwo[0]) {
      arr.push(arrOne.shift());
      continue;
    }
    if (arrOne[0] > arrTwo[0]) {
      arr.push(arrTwo.shift());
      continue;
    }
    if (!arrOne[0] && arrTwo[0] !== undefined) {
      arr.push(arrTwo.shift());
      continue;
    }
    if (!arrTwo[0] && arrOne[0] !== undefined) {
      arr.push(arrOne.shift());
      continue;
    }
    if (arrOne[0] === arrTwo[0]) {
      arr.push(arrOne.shift());
    }
  }
  return arr;
};
