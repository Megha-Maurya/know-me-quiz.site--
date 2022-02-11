var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Please entered your name: ");
console.log("Welcome in a Quiz: " + userName );
console.log("lets check how much you know me ? ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  console.log("You entered: " + userAnswer );

  if (userAnswer === answer ) {
    console.log("Your answer is correct ");
    score = score + 1;
  } else {
    console.log("Oop, betterluck next time! ");
    score = score - 1;
  }
  console.log("current score " + score);
  console.log("-----");
}
var quiz = [{
  
  question: "1. What's my full name ? ",
  answer: "megha maurya"
},{
  question: "2. What's my hometown Guna or Mandsaur ? ",
  answer: "mandsaur"
},{
  question: "3. What is my favourite colour ? ",
  answer: "black"
}, {
  question: "4. What i like most music or dance ? ",
  answer: "music"
},{
  question: "5. What's my favourite food indian, chinese, italian ? ",
  answer: "chinese"
}];
for(i=0; i < quiz.length; i++) {
  var currentQuestion = quiz[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Your final score is: " + score);