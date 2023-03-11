/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía, Diego Herrera Mendoza      
 * @since Mar 09 2023
 * @desc Observer pattern demo. Stock example.
 */

/** @desc Stock class */
class Stock {  
  protected investors: Investor[] = [];

  /**
   * @desc Create a Stock object
   * @param symbol - stock name
   * @param price - stock price
   */
  constructor(
    protected symbol: string = '',
    protected price: number = 0    
    ) {}

  /**
   * @desc Suscribe a new investor
   * @param symbol - new investor to suscribe
   */
  public suscribe(investor: Investor): void {
    this.investors.push(investor);
  }

  /**
   * @desc Unsuscribe an existing investor
   * @param symbol - investor to unsuscribe
   */
  public unsuscribe(investor: Investor): void {
    this.investors.splice(this.investors.indexOf(investor), 0);
  }

  /** @desc Notifies all the current suscribed investors */
  public notify(): void {
    for (const INVESTOR of this.investors) {
      INVESTOR.update(this);
    }
  }

  /**
   * @desc Getter method for the stock price
   * @returns current stock price
   */
  public getPrice(): number {
    return(this.price);
  }

  /**
   * @desc Setter method for the stock price.
   * Notifies all the investors if the price is changed
   * @param newPrice - new stock price
   */
  public setPrice(newPrice: number): void {
    if (this.price !== newPrice) {
      this.price = newPrice;
      this.notify();
    }        
  }

  /**
   * @desc Getter method for the stock name
   * @returns stock name
   */
  public getSymbol(): string {
    return (this.symbol);
  }
}

/** @desc IBM class. Extends from Stock */
class IBM extends Stock {
  /**
   * @desc Create a IBM object
   * @param symbol - stock name
   * @param price - stock price
   */
  constructor(
    symbol: string,
    price: number
    ) {
    super(symbol, price);
  }
}

/** @desc Investor class as template */
class Investor {
  /**
   * @desc Update the stock the investor is suscribed to.
   * @param stock - updated stock
   */
  public update(stock: Stock): void {}
}

/** @desc ConcreteInvestor class. Extends from Investor. */ 
class ConcreteInvestor extends Investor  {
  /**
   * @desc Create a ConcreteInvestor object
   * @param name - investor name
   */
  constructor(
    private name: string,
    private stock: Stock = new Stock()
    ) {
    super();
  }

  /**
   * @desc Update the stock the investor is suscribed to.
   * @param stock - updated stock
   */
  public update(stock: Stock): void {
    this.stock = stock;    
    console.log("Notified " + this.name + " of " + this.stock.getSymbol() + "'s change to " + this.stock.getPrice());
  }
}

function main(): void {
  // Create IBM stock and suscribe investors
  let ibm : IBM = new IBM("IBM", 120.00);
  ibm.suscribe(new ConcreteInvestor("Soros"));
  ibm.suscribe(new ConcreteInvestor("Berkshire"));
  
  // Fluctuating prices will notify investors
  ibm.setPrice(120.10);
  ibm.setPrice(121.00);
  ibm.setPrice(120.50);
  ibm.setPrice(120.75);
}
main();
