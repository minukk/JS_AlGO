Array.prototype.remove_ = function(integer_list, values_list){
  //your code here
  let result = [];
  for (let i = 0; i < integer_list.length; ++i) {
    if (values_list.includes(integer_list[i])) continue;
    else result.push(integer_list[i]);
  }
  
  return result;
}

Array.prototype.remove_ = (integer_list, values_list) => integer_list.filter(num => values_list.indexOf(num) === -1);