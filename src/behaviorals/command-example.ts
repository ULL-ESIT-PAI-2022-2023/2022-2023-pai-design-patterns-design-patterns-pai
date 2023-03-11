/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía, Diego Herrera Mendoza      
 * @since Mar 09 2023
 * @desc Command pattern demo. Stock example.
 */

/** @desc Class representing a stock. ( Receiver ) */
class Stock {
  /**
   * @desc Create a stock.
   * @param name - The name of the stock.
   * @param quantity - The quantity of the stock.
   * @return The stock.
   */
  constructor(
    private name: string,
    private quantity: number) {}

  /**
   * @desc Get the name of the stock.
   * @returns The name of the stock.
   */
  buy() {
    this.quantity++;
    console.log(`Buying... Now you have ${this.quantity} ${this.name} stocks`);
  }

  /**
   * @desc Get the name of the stock.
   * @returns The name of the stock.
   */
  sell() {
    if (this.quantity <= 0) {
      console.log(`You don't have any ${this.name} stocks`);
      return;
    }
    this.quantity--;
    console.log(`Selling... Now you have ${this.quantity} ${this.name} stocks`);      
  }
}

/** @desc Interface representing a command. ( Command ) */
interface Command {
  /**
   * @desc Execute the command.
   * @abstract
   */
  execute(): void;
}

/** Class representing a buy stock command. ( ConcreteCommand ) */
class BuyStock implements Command {
  /**
   * @desc Create a buy stock command.
   * @param abcStock - The stock to buy.
   * @return {BuyStock} The buy stock command.
   */
  constructor(private abcStock: Stock) {}

  /**
   * @desc Execute the command.
   * @override
   */
  execute() {
    this.abcStock.buy();
  }
}

/** Class representing a sell stock command. ( ConcreteCommand ) */
class SellStock implements Command {
  /**
   * @desc Create a sell stock command.
   * @param abcStock - The stock to sell.
   * @return {SellStock} The sell stock command.
   */
  constructor(private abcStock: Stock) {}

  /**
   * @desc Execute the command.
   * @override
   */
  execute() {
    this.abcStock.sell();
  }
}

/** Class representing a broker. ( Invoker ) */
class Broker {
  /** @desc The list of orders. */
  private orderList: Command[] = [];

  /**
   * @desc Take an order.
   * @param {Command} order - The order to take.
   * @return {void}
   */
  takeOrder(order: Command): void {
    this.orderList.push(order);
  }

  /**
   * @desc Place the orders.
   * @return {void}
   */
  placeOrders(): void {
    for (const order of this.orderList) {
      order.execute();
    }
    this.orderList = [];
  }
}

// Usage ( Client )

// We create some stocks
const myStocks: Stock[] = [
  new Stock('Microsoft', 10),
  new Stock('Apple', 20),
  new Stock('Google', 0),
  new Stock('Facebook', 15),
]

// We create a broker
const broker: Broker = new Broker();

// The broker can take orders
broker.takeOrder(new BuyStock(myStocks[0])); // Microsoft
broker.takeOrder(new BuyStock(myStocks[1])); // Apple

// We can also sell stocks
broker.takeOrder(new SellStock(myStocks[2])); // Google
broker.takeOrder(new SellStock(myStocks[3])); // Facebook

// And finally, the broker can place the orders
broker.placeOrders();


