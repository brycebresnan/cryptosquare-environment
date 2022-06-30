function stringPrep(text) {
  text = text.replace(/[^a-zA-Z ]/g, "");
  return text.replaceAll(" ", "").toLowerCase();
}

function characterCounter(text) {
  return text.length;
}

function characterSquare(number) {
  return Math.sqrt(number);
}


// function loopTest() {
// for (i=0;i<3;i++) {
//   console.log("i = "+ i)
//   for (e=[i];e<i;e+=1) {
//     console.log("e = " + e);
//     }
//   }
// }