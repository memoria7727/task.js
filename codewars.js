1 https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript/5fdcceaca633f2002bb5278c
function stringToArray(string) {
return string.split(" ")
}

2 https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript/5fdccb56275c76002c2c5e8a
function DNAtoRNA(dna) {
  return dna.replace(/T/gi,"U");
 }

 3 https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript/5fdccb59a4fce6001c778e38
 function min(list) {
    return Math.min(...list);
}

function max(list) {
    return Math.max(...list);
}

4 https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript/5fdccb5ba4fce6001c778e3a
function min(arr, toReturn) {
if (toReturn == "value") {
  return Math.min(...arr);
  } else if (toReturn == "index") {
    return arr.indexOf(Math.min(...arr));
  }
}