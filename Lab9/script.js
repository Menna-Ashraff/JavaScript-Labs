class Shape
 {
  constructor(name, sides, sideLength) 
  {
    this.name = name
    this.sides = sides
    this.sideLength = sideLength
  }

  calcPerimeter() 
  {
    let perimeter = this.sides * this.sideLength
    console.log(`The perimeter of ${this.name} is ${perimeter}`)
  }
}

let square = new Shape("square", 4, 5)
square.calcPerimeter()

let triangle = new Shape("triangle", 3, 3)
triangle.calcPerimeter()

class Square extends Shape
{
  constructor(sideLength) 
  {
    super("square", 4, sideLength)
  }

  calcArea() 
  {
    const area = this.sideLength * this.sideLength
    console.log(`Area of square is: ${area}`)
  }
}

const squaree = new Square(5)
squaree.calcPerimeter()
squaree.calcArea()

class Triple 
{
  static customName = "Tripler"
  static description = "I triple any number you provide"

  static calculate(n = 1) 
  {
    return n * 3
  }
}

class SquaredTriple extends Triple 
{
  static description = "square the triple of any number you provide"
  static longDescription

  static calculate(n) 
  {
    return super.calculate(n) ** 2
  }
}

console.log(Triple.description)
console.log(Triple.calculate())
console.log(Triple.calculate(6))
console.log(SquaredTriple.calculate(3))
console.log(SquaredTriple.description)
console.log(SquaredTriple.longDescription)
console.log(SquaredTriple.customName)