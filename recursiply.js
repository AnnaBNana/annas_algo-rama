function recursiply(a,b){
  if (a == 0 || b == 0){
    return 0;
  }
  if (b == 1) {
    return a;
  } else {
    b --;
    return recursiply(a,b) + a;
  }
}

var x = recursiply(12,4);
console.log(x);

var y = recursiply(5,4)
console.log(y);

var z = recursiply(12,0);
console.log(z);
