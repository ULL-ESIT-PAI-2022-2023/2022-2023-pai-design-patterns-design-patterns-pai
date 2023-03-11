/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía, Diego Herrera Mendoza
 * @since Mar 09 2023
 * @desc Singleton pattern demo. TicTacToe example.
 */

/** @desc TicTacToe class using Singleton */
class TicTacToe {  
  private static readonly EMPTY: string = ' ';
  private static readonly PLAYER_ONE: string = 'X';
  private static readonly PLAYER_TWO: string = 'O';
  private static currentPlayer: string;
  private static board: string[][];
  private static ticTacToe: TicTacToe;

  /** @desc Create a tic-tac-toe game board */
  private constructor() {
    TicTacToe.currentPlayer = TicTacToe.PLAYER_ONE;
    TicTacToe.board = [[TicTacToe.EMPTY, TicTacToe.EMPTY, TicTacToe.EMPTY],
                       [TicTacToe.EMPTY, TicTacToe.EMPTY, TicTacToe.EMPTY],
                       [TicTacToe.EMPTY, TicTacToe.EMPTY, TicTacToe.EMPTY]];
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
    if (TicTacToe.board[row][column] !== TicTacToe.EMPTY)
      console.log('Slot already taken. Try again.');
    else {
      TicTacToe.board[row][column] = TicTacToe.currentPlayer;
      if (TicTacToe.currentPlayer === TicTacToe.PLAYER_ONE)
        TicTacToe.currentPlayer = TicTacToe.PLAYER_TWO;
      else
        TicTacToe.currentPlayer = TicTacToe.PLAYER_ONE;
    }    
    console.log(TicTacToe.board[0]);
    console.log(TicTacToe.board[1]);
    console.log(TicTacToe.board[2]); console.log('');
  }  
}

function main(): void {
  let playerOne: TicTacToe = TicTacToe.getInstance();
  let playerTwo: TicTacToe = TicTacToe.getInstance();  

  playerOne.play(0, 0);
  playerTwo.play(0, 1);
  playerOne.play(2, 0);
  playerTwo.play(0, 2);
  playerOne.play(1, 1);
}
main();
