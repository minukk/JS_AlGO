function transBinary(num) {
  let binary = [];
  let result = '';
  
  while (num !== 0) {
  	binary.push(num % 2);
    num = Math.floor(num / 2);
  }
  
  for (let i = binary.length - 1; i >= 0; --i) {
  	result += binary[i];
  }
  
  return Number(result);
}

transBinary(16);

// console.log(13 % 2);
// console.log(Math.floor(11 / 2));

const BinaryPiramid = (m, n) => [...Array(n-m+1)].reduce((a, b, i)=>a+ +(m+i).toString(2),0).toString(2);

BinaryPiramid(10, 12);