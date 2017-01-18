function diversion(a,b){
  if (a < b){
    return a;
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
