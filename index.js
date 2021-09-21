var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question("What is you Good Name?\n");
console.log("Welcome " +chalk.green(userName)+" to the"+chalk.blue( " Sports Quiz!"));
var score = 0;
function play(question,answer){
  var userAns = readlineSync.question(question);
  if(answer===userAns){
    console.log(chalk.green("Yay! you are correct!"));
    score = score + 1;  
  }
  else{
    console.log(chalk.red("Oops! you are wrong."));
  }
  console.log("Your current score is: "+score );
}


var qna = [
  { question: "Q.1> How many players are there in each side of Hockey team?\n a. 6\n b. 8\n c. 10\n d. 11\n",
  answer: "d"},
 { question:"Q.2> Which country won most gold medals in Tokyo Olympics 2020?\n a. USA\n b. China\n c. United Kingdom\n d. Germany\n",
  answer: "a"},
 { question: "Q.3> How many players are there in each side of Basket Ball team?\n a. 4\n b. 5\n c. 6\n d. 7\n",
  answer:"b"},
 {question: "Q.4> In which sports, the term HAT-TRICK is used?\n a. Football\n b. Tennis\n c. Chess\n d. Cricket\n",
  answer:"d"},
  {question: "Q.5> Olympic gold medalist Abhinav Bindra is associated with which sports?\n a. Boxing\n b. Wrestling\n c. Archery\n d. Shooting\n",
  answer: "d"}
];

var highScorers = [{name:"Krishna", score: " 5 Points "}, {name:"Rama", score: " 4 Points "}];

for(i=0;i<qna.length; i++){
  play(qna[i].question,qna[i].answer);
  console.log("----------------------------------");
}
console.log(chalk.bgYellow("YOUR FINAL SCORE IS: " +score +" Points "));
console.log(chalk.bgGreen("\n ======HIGH SCORES CHART======"));

for(i=0;i<highScorers.length;i++){
  console.log(highScorers[i].name + ":" + highScorers[i].score);
}