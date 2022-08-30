function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  let result = 0;
  let start = 0;
  let seen = {};
  
  for (let i = 0; i < str.length; ++i) {
      let char = str[i];
      
      if (seen[char]) {
          start = Math.max(start, seen[char]);
      }
      
      result = Math.max(result, i - start + 1);
      
      seen[char] = i + 1;
  }

  
  return result;
}

function findLongestSubstring(str) {
    if (str.lenght === 0) return 0;
    let result = 0;
    let arr = [];
    let temp = 1;
    for (let i = 0; i < str.length - 1; ++i) {
        arr.push(str[i]);
        for (let j = i + 1; j < str.length; ++j) {
            if (arr.includes(str[j])) {
                break;
            }
            arr.push(str[j]);
            temp++;
        }
        
        if (temp > result) result = temp;
        arr = [];
        temp = 1;
    }
    return result;
}