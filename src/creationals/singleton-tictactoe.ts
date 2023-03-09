/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 09 2023
 * @desc Class TicTacToe
 */

/** @desc TicTacToe class using Singleton */
class TicTacToe {  
  private static board: string[][];  
  private static currentPlayer: string;

  private static ticTacToe: TicTacToe;

  /** @desc Create a tic-tac-toe game board */
  private constructor() {
    TicTacToe.currentPlayer = 'X';
    TicTacToe.board = [[' ', ' ', ' '],
                       [' ', ' ', ' '],
                       [' ', ' ', ' ']];
  } 

  /**
   * @desc Get a reference to the class instance
   * @returns reference to the tic-tac-toe game
   */
  public static getInstance(): TicTacToe {
    if (TicTacToe.ticTacToe === undefined) {
      TicTacToe.ticTacToe = new TicTacToe();
    }
    return(TicTacToe.ticTacToe);
  }

  /**
   * @desc Method to play given a row and column. Then shows the current state of the board.
   * @param row - row in which play
   * @param column - column in which play
   */
  public play(row: number, column: number): void {
    if (TicTacToe.board[row][column] !== ' ')
      console.log('Slot already taken. Try again.');
    else {
      TicTacToe.board[row][column] = TicTacToe.currentPlayer;
      if (TicTacToe.currentPlayer === 'O')
        TicTacToe.currentPlayer = 'X';
      else
        TicTacToe.currentPlayer = 'O';
    }    
    console.log(TicTacToe.board[0]);
    console.log(TicTacToe.board[1]);
    console.log(TicTacToe.board[2]); console.log('');
  }  
}

function main(): void {
  let playerOne: TicTacToe = TicTacToe.getInstance();
  let playerTwo: TicTacToe = TicTacToe.getInstance();  

  playerOne.play(0,0);
  playerTwo.play(0,1);
  playerOne.play(2,0);
  playerTwo.play(0,2);
  playerOne.play(1,1);
}
main();
