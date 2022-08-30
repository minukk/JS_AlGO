// function bubleSort(arr) {
//   let temp;
//   let count = 0;
//   for (let i = arr.length; i > 0; --i) {
//   	for (let j = 0; j < i - 1; ++j) {
//       count++;
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
  
//   console.log(count); // 45
//   return arr;
// };

function bubleSort(arr) {
  let temp;
  let count = 0;
  for (let i = arr.length; i > 0; --i) {
    let flag = true;
  	for (let j = 0; j < i - 1; ++j) {
      count++;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = false;
      }
    }
    
    if (flag) break;
  }
  
  console.log(count); // 24
  return arr;
};

bubleSort([1, 5, 2, 12, 4, 57, 21, 54, 21, 102]);