function multiply(a,b){
  return a * b;
}

// var x = multiply(5,4);
// console.log(x);

function recursiply(a,b){
  //break case
  if (b == 1) {
    return a;
  } else {
    b --;
    return recursiply(a,b) + a;
  }
}

var x = recursiply(12,4);
console.log(x);
