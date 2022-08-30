const isNagativeZero = n => n ? false : 1/+0 !== 1/n ? true: false;

// const isNegativeZero = n => {
//   if (n === 0) return 1/+0 !== 1/n;
//   else return false;
// }

isNagativeZero(0);

// console.log(1/+0 === 1/-0);