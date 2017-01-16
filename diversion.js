function remainder(a,b){
  return a % b;
}

// var x = remainder(15,4);
// console.log(x);

function diversion(a,b){
  if (a < b){
    return a;
  }
  else if (a < b*2){
    return a - b;
  } else {
    a = a-b;
    return diversion(a,b);
  }
}

var x = diversion(12,3);
console.log(x);

var y = diversion(15,4);
console.log(y);

var z = diversion(2,19);
console.log(z);
