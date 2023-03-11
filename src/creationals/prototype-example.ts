/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía, Diego Herrera Mendoza      
 * @since Mar 09 2023
 * @desc Protoype pattern demo. Shape example.
 */

/** @desc Abstract class representing a shape. */
abstract class Shape {    
  /**
   * @desc Create a shape.
   * @param coordinateX - The x coordinate of the shape.
   * @param coordinateY - The y coordinate of the shape.
   * @return The shape.
   */
  constructor(
    protected coordinateX: number,
    protected coordinateY: number) {}

  /**
   * @desc Get the x coordinate of the shape.
   * @returns The x coordinate of the shape.
   */
  getCoordinateX(): number {
    return this.coordinateX;
  }

  /**
   * @desc Get the y coordinate of the shape.
   * @returns The y coordinate of the shape.
   */
  getCoordinateY(): number {
    return this.coordinateY;
  }

  /**
   * @desc Clone the shape.
   * @return The shape.
   * @abstract
   */
  abstract clone(): Shape;
}

/** @desc Class representing a rectangle. */
class Rectangle extends Shape {
  /**
   * @desc Create a rectangle.
   * @param coordinateX - The x coordinate of the rectangle.
   * @param coordinateY - The y coordinate of the rectangle.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   * @return {Rectangle} The rectangle.
   */
  constructor(
    coordinateX: number,
    coordinateY: number,
    private width: number,
    private height: number) { 
    super(coordinateX, coordinateY);
  }

  /**	
   * @desc Clone the rectangle.
   * @return {Rectangle} The rectangle.
   * @override
   */
  clone(): Rectangle {
    return new Rectangle(this.coordinateX, this.coordinateY, this.width, this.height);
  }

  /**
   * @desc Get the width of the rectangle.
   * @returns The width of the rectangle.
   */
  getWidth(): number {
    return this.width;
  }
  
  /**
   * @desc Get the height of the rectangle.
   * @returns The height of the rectangle.
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * @desc Get the string representation of the rectangle.
   * @returns The string representation of the rectangle.
   */
  toString(): string {
    return `Rectangle: in position ${this.coordinateX}, ${this.coordinateY} with width ${this.width} and height ${this.height}`;
  }
}

/** @desc Class representing a circle. */
class Circle extends Shape {
    /**
     * @desc Create a circle.
     * @param coordinateX - The x coordinate of the circle.
     * @param coordinateY - The y coordinate of the circle.
     * @param radius - The radius of the circle.
     * @return The circle.
     */
    constructor(
        coordinateX: number,
        coordinateY: number,
        private radius: number) { 
        super(coordinateX, coordinateY);
    }

    /**
     * @desc Clone the circle.
     * @return {Circle} The circle.
     * @override
     */
    clone(): Shape {
        return new Circle(this.coordinateX, this.coordinateY, this.radius);
    }
    /**
     * @desc Get the radius of the circle.
     * @returns The radius of the circle.
     */
    getRadius(): number {
        return this.radius;
    }

    /**
     * @desc Get the string representation of the circle.
     * @returns {string} The string representation of the circle.
     */
    toString(): string {
        return `Circle: in position ${this.coordinateX}, ${this.coordinateY} with radius ${this.radius}`;
    }
}

// Cloning without the clone method
const rectangle = new Rectangle(1, 2, 3, 4);
const rectangle1 = new Rectangle(rectangle.getCoordinateX(), rectangle.getCoordinateY(), rectangle.getWidth(), rectangle.getHeight());
console.log(rectangle.toString());
console.log(rectangle1.toString());

const circle = new Circle(1, 2, 3);
const circle1 = new Circle(circle.getCoordinateX(), circle.getCoordinateY(), circle.getRadius());
console.log(circle.toString());
console.log(circle1.toString());


// Cloning with the clone method (Much cleaner and easier to read)
const rectangle2 = rectangle.clone();
console.log(rectangle2.toString());

const circle2 = circle.clone();
console.log(circle2.toString());



