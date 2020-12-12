var inputVar = require("readline-sync");

var chalk = require("chalk");

var score = 0;

var username = inputVar.question(chalk.black.bgWhite.bold("Enter your name traveller?\n" ));

console.log(chalk.black.bgGreen.bold("Welcome to the Quiz ")+ chalk.black.bgGreen.bold(username));

function play(q,a){

  var userAnswer = inputVar.question(q);

  if(userAnswer == a){

    console.log(chalk.green("wow! you're right!"));
    score++;

  }else{

    console.log(chalk.red("OOPS! that's a wrong answer."));
    
  }
  console.log(chalk.cyan('-------------------------------'))
}


var gameQues = [

    {question: "What is my favourite sport? \n", answer: "Formula 1"},
    {question:"Who is my favourite superhero? \n", answer:"The Flash"},
    {question:"What language am i learning? \n", answer:"Japanese"},
    {question:"The name of my favourite band- \n", answer:"Linkin Park"},
    {question:"What is my favourite Hobby? \n", answer:"Gaming" },
    {question:"My choice of country to live in- \n", answer:"Japan"}

  ]

  for(var i =0 ; i<gameQues.length ; i++){

    var currentQues = gameQues[i];
    play(currentQues.question, currentQues.answer);

  }

  console.log(chalk.white("THANKS FOR PLAYING THE GAME YOUR FINAL SCORE IS ") + chalk.green(score));

