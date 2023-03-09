/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 09 2023
 * @desc Class Database
 */

/** @desc Database class using Singleton */
class Database { 

  private storedInformation: Map<string, number[]>;  

  private static database: Database;

  /** @desc Create a database */
  private constructor() {
    this.storedInformation = new Map<string, number[]>();

    this.storedInformation.set('TeamA', [1, 2, 3]);
    this.storedInformation.set('TeamB', [2, 0, 5]);
    this.storedInformation.set('TeamC', [7, 2, 8]);
  }  

  /**
   * @desc Get a reference to the class instance
   * @returns reference to the database
   */
  public static getInstance(): Database {
    if (Database.database === undefined) {
      Database.database = new Database();
    }
    return(Database.database);
  }
  
  /**
   * @desc Method to make a query to the database
   * @param team - team name
   * @param season - season number
   * @returns goals scored by the team in tthe given season
   */
  public query(team: string, season: number): number {
    return(this.storedInformation[team][season]);
  } }


function main(): void {
  let databaseAccesor: Database = Database.getInstance();
  let databaseSecondAccesor: Database = Database.getInstance();
  
  if (databaseAccesor === databaseSecondAccesor)
    console.log('Both accessors are referencing the same database.');

  console.log('Team A. Season 1 goals scored: ', databaseAccesor.query('TeamA', 0));
  console.log('Team C. Season 2 goals scored: ', databaseAccesor.query('TeamB', 1));
}
main();
