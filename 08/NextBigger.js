function nextBigger(n){
  //your code here
  let str = '' + n;
  let arr = str.split("");
  
  let p = -1;
  
  for (let i = arr.length - 1; i > 0; --i) {
    if (arr[i] > arr[i - 1]) {
      p = i - 1;
      break;
    }
  }
  
  if (p === -1) return p;
  
  let right = arr.splice(p);
  let pivot = right.splice(0, 1)[0];
  
  let number = null;
  let index = null;
  
  for (let i = 0; i < right.length; ++i) {
    if (right[i] > pivot) {
      if (number === null || right[i] < number) {
        number = right[i];
        index = i;
      }
    }
  }
  
  if (index === null) return -1;
  
  right.splice(index, 1);
  right.push(pivot);
  right = right.sort();
  
  let result = arr.concat([number]).concat(right).join('');
  
  if (result < n) return -1;
  
  return result;
}

nextBigger(144);