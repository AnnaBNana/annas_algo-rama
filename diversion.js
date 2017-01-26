function recursulus(a,b){
  if (a < b){
    return a;
  } else {
    a = a-b;
    return recursulus(a,b);
  }
}

var x = recursulus(12,3);
console.log(x);

var y = recursulus(15,4);
console.log(y);

var z = recursulus(2,19);
console.log(z);
