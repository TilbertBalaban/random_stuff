// symbol - завжди унікальний, не доступні в for..in та  Object.keys()
const id = Symbol();
const id2 = Symbol('id');

// global symbol

const id3 = Symbol.for('identifier3');
const id4 = Symbol.for('identifier3');

// console.log(id3 === id4); // true

// Symbol.keyFor(id3); // identifier3 
// id3.description // identifier3

/* 
існують системні символи 
Symbol.iterator
Symbol.toPrimitive
...
*/