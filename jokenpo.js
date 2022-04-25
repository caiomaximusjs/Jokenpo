console.clear();
var prompt = require("prompt-sync")();
// variaveis declaradas
let roundCounter = 1;
let userScore = 0;
let cpuScore = 0;
let Draw = 0;
let options = ["stone", "paper", "scissor"];
const red = "\u001b[31m";
const blue = "\u001b[34m";
const white = "\u001b[0m";
const green = "\u001b[32m";
let error = red + "Please enter a valid option" + white;
const userWin = green + "You win the round" + white;
const userLose = red + "You lose the round" + white;

// Inicio do jogo / 'while' para dar a opção de reiniciar ou não o jogo
while (true) {
  console.log(`${blue} Welcome to jokenpo game, you need to choose a move each round.
  ${white}
  Guide:                         
  Stone win Scissor       
  Scissor win Paper       
  Paper win Stone`)
  console.log();
  console.log(green + "Please choose the number of rounds: " + white);
  let rounds = prompt();
  while (isNaN(rounds)) {
    console.clear();
    console.log(error);
    console.log(green + "Please choose the number of rounds: " + white);
    rounds = prompt();
  }
  console.clear();
    // 'for' para repetiçao e contagem dos rounds 
  for (; roundCounter <= rounds; roundCounter++) {
    // mecânica de jogada da CPU
    const randomMechanic = Math.floor(Math.random() * 3);
    let randomChoice = options[randomMechanic];
    console.log(`ROUND: ${roundCounter}`)
    console.log(blue + "Make your choose: Stone, Paper, Scissor" + white);
    let userChoice = prompt().toLowerCase().trim();
    // Erro na digitação
    while (
      userChoice != "stone" &&
      userChoice != "paper" &&
      userChoice != "scissor"
    ) {
      console.clear();
      console.log(error);
      userChoice = prompt().toLowerCase().trim();
      if (
        userChoice == "stone" &&
        userChoice == "paper" &&
        userChoice == "scissor"
      ) {
        break;
      }
    }
    // Comparação para determinar vencedor da rodada
    if (
      (userChoice == "stone" && randomChoice == options[2]) ||
      (userChoice == "scissor" && randomChoice == options[1]) ||
      (userChoice == "paper" && randomChoice == options[0])
    ) {
      console.clear();
      console.log(userWin);
      userScore++;
    } else if (
      (userChoice == "stone" && randomChoice == options[1]) ||
      (userChoice == "scissor" && randomChoice == options[0]) ||
      (userChoice == "paper" && randomChoice == options[2])
    ) {
      console.clear();
      console.log(userLose);
      cpuScore++;
    } else {
      console.clear();
      console.log(red + "Draw" + white);
      Draw++;
    }
    let restRound = rounds - roundCounter;
    console.log(`This is round: ${roundCounter} rest ${restRound} rounds`);
    console.log(
      blue +
        `User choice: ${userChoice} and the CPU choice: ${randomChoice}` +
        white
    );
    console.log();
    console.log(`${white} User score = ${userScore}
CPU score = ${cpuScore}
Drawns = ${Draw}
    ${white}`);
    console.log();
    let qqr = prompt(blue + "Press ENTER to next round" + white);
    console.clear();
    }
    // Comparação para dizer o vencedor da partida ao todo

    if(userScore > cpuScore){
      console.log(blue + `You played ${rounds} rounds.` + white);
      console.log(`The final score is:

user score: ${userScore}
CPU score: ${cpuScore}
draws: ${Draw} ${green}

Congratulations, you won the machine!! ${white}
`)
    } else if (userScore < cpuScore) {
      console.log(blue + `You played ${rounds} rounds.` + white);
      console.log(`The final score is:

user score: ${userScore}
CPU score: ${cpuScore}
draws: ${Draw} ${red} 

OH NO, the machine won you ${white}`)

    } else {
      console.log(blue + `You played ${rounds} rounds.` + white);
      console.log(`The final score is:

user score: ${userScore}
CPU score: ${cpuScore}
draws: ${Draw} ${red} 

OH NO, the machine draw with you ${white}
`)
    }
    // REPETIÇAO DE PARTIDA
  var go = prompt("Press ENTER to continue")
  console.clear()
console.log(`do you want to play again?
enter ${green} [yes] ${white} or ${red} [no] ${white}: `)
  let repetir = prompt().toLowerCase().trim();
  console.clear()
  if (repetir != 'no'){
    rounds = 0;
    roundCounter = 1;
    userScore = 0;
    cpuScore = 0;
    Draw = 0;
  } else {
    console.log(` ${red} 

                                         GAME OVER!!`)
    break;
  }
  
}     

