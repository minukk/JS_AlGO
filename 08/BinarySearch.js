function binarySearch(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2);
  
  while (arr[mid] !== num && left <= right) {
      if (num > arr[mid]) left = mid + 1;
      else right = mid - 1;
      mid = Math.floor((left + right) / 2);
  }
  
  return arr[mid] === num ? mid : -1;
}

binarySearch([5, 6, 7, 10, 13, 14, 18, 30, 34, 35, 37, 40, 95, 100, 103], 7)