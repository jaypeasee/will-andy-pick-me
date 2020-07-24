
var input = document.querySelector('.input-form');
var inputButton = document.querySelector('.input-button');
var questionRepeat = document.querySelector('h3');
var questionAnswer = document.querySelector('h2');
var eightBall = document.querySelector('.eight-ball')
var clearButton = document.querySelector('.clear');

var answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

inputButton.addEventListener('click', giveAnswer);
clearButton.addEventListener('click', clearAnswer);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function giveAnswer() {
  questionRepeat.innerText = input.value;
  questionAnswer.innerText = answers[getRandomIndex(answers)];
  input.value = "";
  eightBall.remove();
};

function clearAnswer() {
  if (questionRepeat.innerText !== "" && questionAnswer.innerText !== "") {
    questionRepeat.innerText = "";
    questionAnswer.innerText = "";
  }
}
//if !h2 === "" && !h3 === ""
//questionRepeat.innerText = "";
//questionAnswer.innerText = "";
//else do nothing.
