let score = 100;
function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score < 60 && score >= 0;

  let scoreFinal;
  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreF) {
    scoreFinal = "E";
  } else {
    scoreFinal = "Nota inválida.";
  }

  return scoreFinal;
}

// coloque sua nota dentro de () exemplo: console.log(getScore(70));
console.log(getScore(90));
console.log(getScore(78));
console.log(getScore(84));
console.log(getScore(93));
console.log(getScore(100));
console.log(getScore(47));
console.log(getScore(89));
console.log(getScore(62));
console.log(getScore(99));
console.log(getScore(72));
console.log(getScore(61));
console.log(getScore(52));

