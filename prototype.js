const foo = {
	a: 42
};

const bar = Object.create( foo );
const bar2 = foo;

bar.b = "hello world";
// bar2.b = 'test';

// console.log(bar.b);		// "hello world"
// console.log(bar.a);		// 42

// console.log(bar2.b);		// "test"
// console.log(bar2.a);		// 42

// console.log(foo.b);		// "test"
// console.log(foo.a);		// 42


// в JS немає наслідування, є делегування через силку (__proto__ --> prototype) на "батьківський" обєкт 
/* 
	__proto__ - є у всіх обєктів, зсилається на prototype обєкта-конструктора (new Object, Array, Function, Number etc) (для Object.prototype __proto__ === nnull)
	prototype - є у класів чи функцій-конструкторів

	const obj = new Object();
	obj.__proto__ === Object.prototype;

	function/class Person () {};
	const vlad = new Person();
	const oleg = new Person();
	vlad.__proro__ === Person.prototype;
	Person.__proto__ === Function.prototype;
	oleg.__proto__ === vlad.__proto__;
*/

/* 
	__proto__ - для доступу до батьківських методів і властивостей
	prototype - для встановлення методів і властивостей для наслідування

	function Person () {};
	Person.prototype.a = 'a';

	const vlad = new Person();
	vlad.a === 'a'; // vlad.a --> vlad.__proto__.a --> Person.prototype.a
*/

function Test2 (name) {
	this.name = name;
};

Test2.prototype.hello = function () {
	console.log('hello')
}

class Test {
	constructor(name) {
		this.name = name;
	}
	hello() {
		console.log('hello');
	}
}

const test = new Test('name');
const test2 = new Test2('name');

// console.log(test.__proto__.__proto__); // test.__proto__ === Test.prototype ( {hello: () {} }) --> Test.prototype.__proro__ === Object.prototype
// console.log(test.__proto__.constructor.__proto__); // test.__proto__ === Test.prototype ( {hello: () {} }) --> Test.prototype.constuctor.__proto__ === Function.prototype
// console.log(test.__proto__.__proto__.__proto__); // Object.prototype.__proto__ === null

function Foo3() {
  // ...
}

// Foo3.prototype.constructor === Foo; // true

var a3 = new Foo3();
// a3.constructor === Foo3; // true


// extends --> Object.create(..), .__proto__ або Object.setPrototypeOf(..)

// повна зміна прототипа впливає на нові обєкти, але не на вже створені
// зміна частина прототипа впливає на старі обєкти

// __proto__ - застаріле
/* 
const newObj = Object.create(protoObj, [descriptors]);
Object.create(null) - новий обєкт без прото
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, proto);
*/

/* 
різниця між класами і функціями
1. [[IsClassConstructor]]: true
2. не можна викликати клас без new

---
class          function
constructor    body
methods        .prototype
*/