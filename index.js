var input = document.querySelector('.input-form');
var inputButton = document.querySelector('.input-button');
var questionRepeat = document.querySelector('h2');
var questionAnswer = document.querySelector('.question-answer');

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

questionRepeat.addEventListener('click', repeatInput);
questionAnswer.addEventListener('click', loadAnswer);

function repeatInput() {
  questionRepeat.innerText = input.value;
}

function loadAnswer() {

}
