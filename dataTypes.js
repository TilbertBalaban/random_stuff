// Strings

const str1 = 'qweWe';
str1[0] = 'Q';
// console.log(str1); // qweWe

// toFixed - кількість цифр після коми
// toPrecision - кількість цифр загалом

/* 
0xf3 - 16 сч
0o363 - 8 сч
0b11110011 - 2сч
*/

var a2 = new String( "abc" );

console.log(typeof a2); // "object" ... не "String"

a2 instanceof String; // true

console.log(Object.prototype.toString.call( a2 )); // "[object String]"