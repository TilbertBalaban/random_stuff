/* 
map
можна використовувати для функцій-кешувальників
*/

const collection = new Map([
  [key, 'value'],
  [123, 500],
]);
const objKey = {};

collection
  .set(1, 1)
  .set('1', '1')
  .set(objKey, 'objKey')

console.log(collection.get(objKey));
console.log(collection.has(2));
console.log(collection.has('1'));

collection.delete('1')

console.log(collection.has('1'), collection.size);

/* 
map.keys() - object of keys
map.values() - object of values
map.entries() - object of [key, value]
*/

/* 
weekMap
key - only objects
економить память, при видаленні ключа-обєкту автоматично очищає значення
не має методів для перебору та отримання розміру
*/

