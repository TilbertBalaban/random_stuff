// interface Person {
//   name: string,
//   age: number,
// }

// class Person implements Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// species (методи перебору повертатимуть екземпляри батьківського класу)

class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
const myArray = new MyArray(1, 2, 3);
const mapped = myArray.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true

/* mix-ins (абстрактні підкласи) - шаблон для класів. 
 реалізується за допомогою функцій, які приймають класи і розширюють його
 (для подальшого наслідування)
*/

const calculatorMixin = Base => class extends Base {
  calc() { }
};

class Foo { }
class Bar extends calculatorMixin(Foo) { }

// private fields

class Rectangle {
  #height;
  #width;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  printArea() {
    console.log(this.#height, this.#width)
  }
}

const rectan = new Rectangle(5, 10);
rectan.printArea();

// static (не можуть бути викликані у екземплярів)

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Точка";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; //undefined

