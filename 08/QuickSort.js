function pivot(arr, start=0, end=arr.length+1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  let pivot = arr[start];
  let swapIndex = start;
  
  for (let i = start + 1; i < arr.length; ++i) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left=0, right=arr.lenght-1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  
  return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3]);