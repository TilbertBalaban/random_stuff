// Object.is

var a = 2 / "foo";
var b = -3 * 0;

Object.is( a, NaN );	// true
Object.is( b, -0 );		// true

Object.is( b, 0 );		// false

// існує 0 і -0
 
// globalThis

// Ad-hoc-полиморфизма – обработка аргументов в зависимости от их типа или, как в нашем случае – от значения length

/* lchc - low coupling high cohesion
  lc - класи (функції) повинні бути максимально незалежні одна від одної і від зовнішнього оточення
  hc - класи (функції) повинні виконувати обмежений набір завдань (+- single responsibility)
*/

// dependency inversion vs dependency injection

/* атрибути записуються до DOM, як властивості
не стандарті атрибути доступні через getAttribute

атрибут - завжди строка і регістр не важливий
властивість - може бути різна (наприклад для checked: boolean, style: object)
*/ 

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;

let person1 = { name: 'Lydia' };
const members1 = [person1];
person1 = null;

console.log(members1); // [{ name: 'Lydia' }].. if person1.name = 'test' --> [{ name: 'test' }]


let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName();