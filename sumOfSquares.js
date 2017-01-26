// sum of squares is in progress

function isSquare(num,i){
  if (!i){
    i = 1;
  }
  if (i*i > num){
    return false;
  }
  else if (i*i == num) {
    return i;
  } else {
    i++;
    return isSquare(num,i)
  }
}

function findSquares(num, i, arr){
  if (!i && !arr) {
    i = 1;
    arr = []
  }
  if (i > num) {
    return arr;
  }
  if (isSquare(i)) {
    arr.push(i);
  }
  i++;
  return findSquares(num,i,arr);
}

function sumOfSquares(num){

}

// console.log(sumOfSquares(200));
console.log(findSquares(200));
