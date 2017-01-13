// it looks so nice
// what's the big O?
function fib_1(n) {
    if (n == 1 || n == 2)
        return 1;
    else
      return fib_1(n-1) + fib_1(n-2);
}

console.log(fib_1(1));
console.log(fib_1(18));

// it looks so bad.
// what's the big O?
function fib_2(n){
  if (n < 1){
    return 0
  }
  var prev = 0;
  var counter = 1;
  var current = 1;
  var temp;
  while(n-1){
    temp = current;
    current = (prev + current);
    prev = temp;
    n--;
  }
  return current
}

var x = fib_2(1)
console.log(x);
