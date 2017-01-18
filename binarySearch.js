function binarySearch(arr,val){
  var i = Math.floor(arr.length/2);
  if (arr[i] == val){
    return true;
  }
  else if (arr.length <= 1) {
    return false;
  }
  if (val < arr[i]) {
    return binarySearch(arr.slice(0,i), val);
  }
  else if (val > arr[i]) {
    return binarySearch(arr.slice(i + 1, arr.length), val);
  }
}

var arr = [4,8,9,12,34,56,67,78,90,112,123];
var y = [1];
var x = binarySearch(arr,90);
console.log(x);
