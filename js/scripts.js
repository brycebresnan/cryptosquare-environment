function stringPrep(text) {
  text = text.replace(/[^a-zA-Z ]/g, "");
  return text.replaceAll(" ", "").toLowerCase();
}

function characterCounter(text) {
  return text.length;
}

function characterSquare(number) {
  if (Math.sqrt(number) === Math.floor(Math.sqrt(number))){
    return Math.sqrt(number);
  }
  else {
    return (Math.floor(Math.sqrt(number))) + 1;
  }  
}

function squareBuilder(text, square) {
  const textArray = []
  for (let i=0;i<square+1;i++) {
    for (let a=i;a<text.length;a+=square) {
      if (textArray.length != text.length) {
      textArray.push(text[a]);
      }
    }
  }
  return textArray.join("");
}

function codeOutput(text) {
  let newString = "";
  for (i=0;i<text.length;i++) {
    if (i%5 === 0 && i !== 0) {
      console.log(i%5);
      newString = newString.concat(" " + text[i]);
    }
    else {
      newString = newString.concat(text[i]);
    }
  }
  return newString;
}

function cryptoSquare(text) {
  prepString = stringPrep(text);
  countedString = characterCounter(prepString);
  squareRoot = characterSquare(countedString);
  scrambledText = squareBuilder(prepString, squareRoot);
  return codeOutput(scrambledText);

}


// function loopTest() {
// for (i=0;i<3;i++) {
//   console.log("i = "+ i)
//   for (e=[i];e<i;e+=1) {
//     console.log("e = " + e);
//     }
//   }
// }