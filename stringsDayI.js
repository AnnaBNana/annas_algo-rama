function stringToArray(str) {
  var arr = [],
  newStr = "";
  for (var i = 0; i <= str.length; i++){
    if (str[i] != " " && i != str.length) {
      newStr += str[i];
    } else if (newStr.length >= 1){
      arr.push(newStr);
      newStr = "";
    }
  }
  return arr;
}

console.log(stringToArray(" Life is not a drill!"));

function longestWord(str) {
  var newStr = "",
  result = "";
  for (var i = 0; i < str.length; i++){
    if (str[i] != " ") {
      newStr += str[i];
    }
    else if (str[i] == " " || i == str.length) {
      if (result.length < newStr.length){
        result = newStr;
      }
      newStr = "";
    }
  }
  return result;
}

console.log(longestWord("Snap crackle pop makes the world go round!"));

function reverseWordOrder(str){
  var newStr = "",
  tempStr = "",
  x = " ";
  for (var i = 0; i < str.length; i++) {
    tempStr += str[i];
    if (str[i] == " " || i == str.length) {
      x = newStr;
      newStr = tempStr + x;
      tempStr = " ";
    }
  }
  x = newStr;
  newStr = tempStr + x;
  return newStr;
}

console.log(reverseWordOrder("Life is not a drill, go for it!"));
