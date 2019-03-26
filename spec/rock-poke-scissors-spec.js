import Round from '../src/js/rock-poke-scissors.js';

describe('Round', function () {
  let round = new Round();

  it('should check if this method adds to the points in the round constructer', function () {
    round.didUserWinRound("rock");
    round.computerChoice = "scissors";
    expect(round.points).toEqual(1);
  });

  it('should check if this method adds to the points in the round constructer', function () {
    round.didUserWinRound("paper");
    round.computerChoice = "rock";
    expect(round.points).toEqual(1);
  });

  it('should check if this method adds to the points in the round constructer', function () {
    round.didUserWinRound("scissors");
    round.computerChoice = "paper";
    expect(round.points).toEqual(1);
  });

  it('should check if points is greater than or equal to 2', function () {
    round.points = 2;
    expect(round.didUserWinGame()).toEqual('You won!');
  });

  it('should check if computerPoints is greater than or equal to 2', function () {
    round.computerPoints = 3;
    expect(round.didUserWinGame()).toEqual('The computer won!');
  })
});