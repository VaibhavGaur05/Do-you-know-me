var inputVar = require("readline-sync");

var chalk = require("chalk");

var score = 0;

var username = inputVar.question(chalk.red.bgWhite.bold("Enter your name traveller?" ));

console.log(chalk.black.bgGreen.bold("Welcome to the Game ")+ chalk.black.bgGreen.bold(username));

function play(q,a){

  var userAnswer = inputVar.question(q);

  if(userAnswer == a){

    console.log(chalk.green("wow! you're right!"));
    score++;

  }else{

    console.log(chalk.red("OOPS! that's a wrong answer."));
    console.log(chalk.white('-------------------------------'))
  }

}


var gameQues = [

    {question: "What is my favourite sport? ", answer: "Formula 1"},
    {question:"Who is my favourite superhero? ", answer:"The Flash"},
    {question:"What language am i learning? ", answer:"Japanese"},
    {question:"The name of my favourite band- ", answer:"Linkin Park"},
    {question:"What is my favourite Hobby? ", answer:"Gaming" },
    {question:"My choice of country to live in- ", answer:"Japan"}

  ]

  for(var i =0 ; i<gameQues.length ; i++){

    var currentQues = gameQues[i];
    play(currentQues.question, currentQues.answer);

  }

  console.log(chalk.cyan("THANKS FOR PLAYING THE GAME YOUR FINAL SCORE IS ") + chalk.green(score));

