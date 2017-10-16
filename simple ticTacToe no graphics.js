function ticTacToe() {
	this.board = ["-", "-", "-", 
                "-", "-", "-", 
                "-", "-", "-"];
	this.activePlayer = 1;
    this.toString = function(){
    	var ret = "[" + this.board[0] + "|" + this.board[1] + "|" + this.board[2] + "]\n"
    				+ "[" + this.board[3] + "|" + this.board[4] + "|" + this.board[5] + "]\n"
    				+ "[" + this.board[6] + "|" + this.board[7] + "|" + this.board[8] + "]\n";
    	return ret;
    }
}


ticTacToe.prototype.mark = function(){
	if (this.activePlayer == 1) {
		return "X";
	}
	else if (this.activePlayer == 2) {
		return "O";
	}
	else {
		return "?";
	}
}

ticTacToe.prototype.changePlayer = function(){
	if (this.activePlayer == 1) {
		this.activePlayer = 2;
	}
	else if (this.activePlayer == 2) {
		this.activePlayer = 1;
	}
	else {
		alert("Error");
	}
}

function checkWin(board) {
	var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	var ret = false;
	for (var i = 0; i < 8; i++) {
		var row = "" + board[winConditions[i][0]] + board[winConditions[i][1]] + board[winConditions[i][2]];
		if(row == "XXX"){
			ret = true;
		}
		if (row == "OOO"){
			ret = true;
		}
	//if none of the wincons match
	}
  return ret;
}

var helpBoard = "[1|2|3]\n[4|5|6]\n[7|8|9]";

//You have to prevent a player from picking a square that has already been chosen.

function game() {
	alert("Tic-Tac-Toe: 3 in a row!");
	var turns = 1;
	var gameBoard = new ticTacToe();
	while (turns < 10) {
		var pick = prompt(gameBoard + "\nTurn " + turns + "\nPlayer " + gameBoard.activePlayer + ": Which available square do you want to mark?");
		if (pick >= 1 && pick <= 9 && gameBoard.board[pick-1] != '-'){
			alert(gameBoard.board[pick-1] + "\n\nThat square is already taken. Please pick an available square.");
		}
		else if (pick >= 1 && pick <= 9){
			gameBoard.board[pick-1] = gameBoard.mark();
			if (checkWin(gameBoard.board)) {
				alert(gameBoard + "\n\nPlayer " + gameBoard.activePlayer + " wins!");
				break;
			}
     		gameBoard.changePlayer();
			turns++;
		}
		else if (pick == "help"){
			alert(helpBoard + "\nTic-Tac-Toe: Three in a row!\nChoose your input based on these numbers.");
		}
		else if (input == "quit"){
			gameBoard.changePlayer();
			alert(gameBoard + "\n\nThanks for playing!");

		}
		else {
			alert("Invalid input. Please pick a square from 1 through 9. For help, input 'help'.");
		}
	}
	if (turns >= 10) {
		alert(gameBoard + "\n\nGAME OVER! It's a draw!");
	}
}

game();