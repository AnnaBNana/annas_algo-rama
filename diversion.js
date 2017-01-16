function remainder(a,b){
  return a % b;
}

// var x = remainder(15,4);
// console.log(x);

function diversion(a,b){
  //base case
  if (a < b*2){
    return a - b;
  } else {
    a = a-b;
    return diversion(a,b)
  }
}

var x = diversion(29,4);
console.log(x);
