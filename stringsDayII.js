function dedupe(str){
  var letters = {},
  newStr = "",
  temp = "";
  for (var i = str.length - 1; i > 0; i--){
    if (!(str[i] in letters))  {
      temp = newStr;
      newStr = str[i] + temp;
      letters[str[i]] = 1;
    } else {
      letters[str[i]]++;
    }
  }
  temp = str[i];
  newStr = temp + newStr;
  return newStr;
}

console.log(dedupe("Snaps! crackles! Pops!"));

function uniqueLetters(str) {
  var letters = {},
  newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (!(str[i] in letters))  {
      letters[str[i]] = 1;
    } else {
      letters[str[i]]++;
    }
  }
  for (var j = 0; j < str.length; j++) {
    if (letters[str[j]] == 1)  {
      newStr += str[j];
    }
  }
  return newStr;
}

console.log(uniqueLetters("Snaps! Crackles! Poop!"));
