// set
// містить тільки унікальні значення

const objValue = {};

const mySet = new Set([1,2,1,objValue]);

mySet
  .add(1)
  .add(5)
  .add(objValue)
  .delete(1)

console.log(mySet);

// weekSet
// values - only objects