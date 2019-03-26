export default class Round {
  constructor() {
    this.points = 0;
    this.computerPoints = 0;
  }

  didUserWinRound(userPick) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    if(userPick === "rock" && computerChoice === "scissors" || userPick === "paper" && computerChoice === "rock" || userPick === "scissors" && computerChoice === "paper") {
      return this.points++;
    } else {
      return this.computerPoints++;
    }
  }

  didUserWinGame() {
    if(this.points >= 2) {
      this.points = 0;
      this.computerPoints = 0;
      return 'You won!';
    } else if(this.computerPoints >= 2) {
      this.points = 0;
      this.computerPoints = 0;
      return 'The computer won!';
    }
  }
}