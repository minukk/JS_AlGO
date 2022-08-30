const topThreeWords = text => {
  const reg = /[^a-zA-Z']{1,}/;
  
  const map = new Map();
  
  text.toLowerCase().split(reg).filter(str => str.length).forEach(str => {map.get(str) ? map.set(str, map.get(str) + 1) : map.set(str, 1) });
  
  const textCount = [...map].sort((a, b) => b[1] - a[1]).filter((arr, idx) => idx <= 2 && /\w/.test(arr[0]));
  
  return textCount.map(arr => arr[0]);
};

const testText = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;
const testText2 = "  //wont won't won't ";
const testText3 = "  , e   .. ";
topThreeWords(testText);
topThreeWords(testText2);
topThreeWords(testText3);
topThreeWords("'\'")