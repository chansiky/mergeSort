function split(array) {
  //array length/2
  let firstHalf = [];
  let secondHalf = [];
  let middleInteger = Math.ceil(array.length / 2);
  firstHalf = array.slice(0, middleInteger);
  secondHalf = array.slice(middleInteger);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const mergedArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1.shift())
    } else {
      mergedArr.push(arr2.shift())
    }
  }
  return mergedArr.concat(arr1, arr2)
}

function mergeSort(arr) {

  return undefined;
}
