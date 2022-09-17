const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

const least = (a, b) => (a * b) / gcd(a, b);

// const lcm = (...arg) => {
//   let result = 1;
//   const arr = [...arg];
  
//   for (const num of arr) {
//     result = least(result, num);
//   }
  
//   return result;
// }


const _gcd = (a, b) => b === 0 ? a : _gcd(b, a % b);
const _lcm = (a, b) => a * b / _gcd(a, b);
const lcm = (...args) => args.reduce((acc, x) => _lcm(x, acc), 1);
lcm(2, 3, 5);