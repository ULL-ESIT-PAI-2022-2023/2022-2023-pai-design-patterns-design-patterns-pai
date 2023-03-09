/** Abstract class representing a shape. */
abstract class Shape {
    
    /**
     * @desc Create a shape.
     * @param {number} coordX - The x coordinate of the shape.
     * @param {number} coordY - The y coordinate of the shape.
     * @return {Shape} The shape.
     */
    constructor(protected coordX: number, protected coordY: number) {}

    /**
     * @desc Get the x coordinate of the shape.
     * @returns {number} The x coordinate of the shape.
     */
    getCoordX(): number {
        return this.coordX;
    }

    /**
     * @desc Get the y coordinate of the shape.
     * @returns {number} The y coordinate of the shape.
     */
    getCoordY(): number {
        return this.coordY;
    }

    /**
     * @desc Clone the shape.
     * @return {Shape} The shape.
     * @abstract
     */
    abstract clone(): Shape;
}

/**  Class representing a rectangle. */
class Rectangle extends Shape {

    /**
     * @desc Create a rectangle.
     * @param {number} coordX - The x coordinate of the rectangle.
     * @param {number} coordY - The y coordinate of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     * @return {Rectangle} The rectangle.
     */
    constructor(coordX: number, coordY: number, private width: number, private height: number) { 
        super(coordX, coordY);
    }

    /**	
     * @desc Clone the rectangle.
     * @return {Rectangle} The rectangle.
     * @override
     */
    clone(): Shape {
        return new Rectangle(this.coordX, this.coordY, this.width, this.height);
    }

    /**
     * @desc Get the width of the rectangle.
     * @returns {number} The width of the rectangle.
     */
    getWidth(): number {
        return this.width;
    }
    
    /**
     * @desc Get the height of the rectangle.
     * @returns {number} The height of the rectangle.
     */
    getHeight(): number {
        return this.height;
    }

    /**
     * @desc Get the string representation of the rectangle.
     * @returns {string} The string representation of the rectangle.
     */
    toString(): string {
        return `Rectangle: in position ${this.coordX}, ${this.coordY} with width ${this.width} and height ${this.height}`;
    }
}

/** Class representing a circle. */
class Circle extends Shape {

    /**
     * @desc Create a circle.
     * @param {number} coordX - The x coordinate of the circle.
     * @param {number} coordY - The y coordinate of the circle.
     * @param {number} radius - The radius of the circle.
     * @return {Circle} The circle.
     */
    constructor(coordX: number, coordY: number, private radius: number) { 
        super(coordX, coordY);
    }

    /**
     * @desc Clone the circle.
     * @return {Circle} The circle.
     * @override
     */
    clone(): Shape {
        return new Circle(this.coordX, this.coordY, this.radius);
    }
    /**
     * @desc Get the radius of the circle.
     * @returns {number} The radius of the circle.
     */
    getRadius(): number {
        return this.radius;
    }

    /**
     * @desc Get the string representation of the circle.
     * @returns {string} The string representation of the circle.
     */
    toString(): string {
        return `Circle: in position ${this.coordX}, ${this.coordY} with radius ${this.radius}`;
    }
}

// Cloning without the clone method
const rectangle = new Rectangle(1, 2, 3, 4);
const rectangle1 = new Rectangle(rectangle.getCoordX(), rectangle.getCoordY(), rectangle.getWidth(), rectangle.getHeight());
console.log(rectangle.toString());
console.log(rectangle1.toString());

const circle = new Circle(1, 2, 3);
const circle1 = new Circle(circle.getCoordX(), circle.getCoordY(), circle.getRadius());
console.log(circle.toString());
console.log(circle1.toString());


// Cloning with the clone method (Much cleaner and easier to read)
const rectangle2 = rectangle.clone();
console.log(rectangle2.toString());

const circle2 = circle.clone();
console.log(circle2.toString());



