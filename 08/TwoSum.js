const twoSum = (nums, target) => {
  const hash = {};
  
  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
    	return [hash[target-n], i];
    }
    hash[n] = i;
  }
  return [];
}

twoSum([3, 2, 5, 6], 5);

var countBits = function(n) {
  // Program Me
  let binary = '';
  let result = 0;
  
  while (n > 0) {
    binary = n % 2 + binary;
    n = Math.floor(n / 2);
  }
  console.log(binary);
  for (let i = 0; i < binary.length; ++i) {
    if (binary[i] === '1') result++;
  }
  
  return result;
};

countBits(10);