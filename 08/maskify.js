function maskify(cc) {
  let result = '';
  
  if (cc.length < 4) result = cc;
  else {
    for (let i = 0; i < cc.length; ++i) {
      if (i < cc.length - 4) result += '#';
      else result += cc[i];
    }
  }
  
  return result;
}

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

const maskify = cc => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);