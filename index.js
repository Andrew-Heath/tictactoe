/*
  Make a command line tic-tac-toe game from scratch for two players. 
  Expected features
  ===============
  * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
  * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
  * Win detection - detect and display who won

  Bonus / stretch goals (any or all of the following)
  =======================================
  * Structure your code such that the UI can be turned easily into a native mobile app (iOS say) without having to rewrite the core game logic.
  * Implement win detection with a functional rather than iterative style.
  * Between moves, rotate the board 90 degrees counter-clockwise. The moves "fall" due to "gravity", post-rotation.

  Implementation instructions
  =======================
  * Create the project from scratch. Don't just clone an existing project.
  * This includes writing configuration files for any dependencies and test framework setup.
  * You should have a reasonably thorough suite of unit tests using a real unit test framework.
  * Use the editor of your choice.
  * Init a git repo for this project.
  * Push the repo up to github.
  * Make small commits as you go to illustrate your thought process and be able to back out changes easily.
  * Don't forget to push your final solution up to Github.
  * Add a professional-looking README file with installation and usage instructions.

  Try your best to work on this challenge without referring to outside resources. However, if you have to look things up online, go ahead. 

  Submission instructions
  ====================
  Upon completion of your work, submit a link to the repository via this form.
*/

// Sets up ability to take input from console and query user(s)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ELEMENTS NEEDED
// Board Class
//   Tracks moves
//   Draw function
//   Turn tracker
//   Victory checker
//   Turn request

function Board() {
  this._board = [null, [' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  this._whoTurn = 'X';
  this._whichTurn = 1;
  this._coord = {
    A: 0,
    B: 1,
    C: 2
  }
}

Board.prototype.draw = function() {
  // Draws the board on the console
  /* OUTLINE FOR THE BOARD

        A B C

      1  | | 
        -----
      2  | | 
        -----
      3  | | 

  */
  var line = [];
  line[0] = '  A B C';
  line[1] = '';
  line[2] = '1 ' + this.board[1][0] + '|' + this.board[1][1] + '|' + this.board[1][2];
  line[3] = '2 ' + this.board[2][0] + '|' + this.board[2][1] + '|' + this.board[2][2];
  line[4] = '3 ' + this.board[3][0] + '|' + this.board[3][1] + '|' + this.board[3][2];

  for (var i = 0; i < line.length; i++) {
    console.log(line[i]);
  }
};

Board.prototype.checkWin = function() {
  // Checks to see if either player has won
  // rl.close();
};

Board.prototype.takeTurn = function() {
  // Queries the user(s) for their move, handles it, and continues until the game is won
  rl.question(('Player ' + this._whoTurn + ' - Where shall you move? Ex. 1A'), function(coord) {
    // Check if valid move
    if (!(this._board[coord[0]][this._coord[coord[1]]] === ' ')){
      // if not, state the move was invalid and return
      console.log('Invalid move.');
      return;
    }
    // if valid, record move and change turn
    this._board[coord[0]][this._coord[coord[1]]] = this._whoTurn;
    this._whoTurn = this._whoTurn === 'X' ? 'U' : 'X';
    this._whichTurn++;
    // Check if on turn 5 or later
    if (this._whichTurn >= 5)
      // if so, start checking for victory

  })
};

Board.prototype.start = function() {
  // Function to start a game and keep it going
  while(true) {
    this.draw();
    this.takeTurn();
  }
};


// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//  rl.close();
// });
