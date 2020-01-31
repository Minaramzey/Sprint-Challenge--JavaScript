// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
constructor (attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  };
  
  volume() {
    return this.length * this.width * this.height;
  };
  
  surfaceArea() {
    return 2 * ( this.length * this.width + this.length * this.height + this.width * this.height);
  };
};

  
  const cuboid = new CuboidMaker({
    'length':4,
    'width': 5,
    'height': 5
  });



// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(childAttributes) {
      super(childAttributes);    
    }  
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    } 
  } 
  
  const cubeMaker = new CuboidMaker ({
    "length": 4,
    "width": 4,
    "height": 4,
  });

  console.log(cubeMaker.volume());
  console.log(cubeMaker.surfaceArea());

//~~~~~~~~~~~~~~~~~~~
// 1. Describe the biggest difference between `.forEach` & `.map`.
// that forEach allows the mutation of the original array, while Map returns a new array of the same size. 
// 2. What is the difference between a function and a method?
// A function is a piece of code that is called by name.  A method is a piece of code that is called by a name that is associated with an object
// 3. What is closure?
// combination of a function bundled together refrencing to its surrounding
// 4. Describe the four rules of the 'this' keyword.
// 1)Window/Global Object Binding
// 2)Implicit Binding
// 3)New Binding
// 4)Explicit Binding
// 5. Why do we need super() in an extended class?
// It takes the place of a call function.
