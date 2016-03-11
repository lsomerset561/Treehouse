function Dice(sides) {
  this.sides = sides;
  this.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Added here to match Andrew's solution.  Allows die to be set in advance for users instead of through console (mainly for programmers).
var dice = new Dice(6);