function dedupe(str){
  debugger;
  var letters = {},
  newStr = "",
  temp = "";
  for (var i = str.length - 1; i > 0; i--){
    if (!(str[i] in letters) && str[i] != " ")  {
      temp = newStr;
      newStr = str[i] + temp;
      letters[str[i]] = 1;
    } else {
      letters[str[i]]++;
    }
  }
  // console.log(letters);
  if (!(str[i] in letters) && str[i] != " ")  {
    temp = newStr;
    newStr = str[i] + temp;
    letters[str[i]] = 1;
  }
  return newStr;
}

function isPangram(str) {
  debugger;
  var lower = str.toLowerCase();
  console.log(lower);
  var deduped = dedupe(lower);
  // console.log(dedupe(lower));
  if (deduped.length == 26) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("The quick brown fox jumps over the lay dog"));
