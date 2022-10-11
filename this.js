function foo1() {
	// console.log( this.bar1 );
}

var bar1 = "global";

var obj1 = {
	bar: "obj1",
	foo: foo1
};

var obj2 = {
	bar: "obj2"
};

//--------

foo1();				// "global", in strict - undefined
obj1.foo();			// "obj1"
foo1.call( obj2 );	// "obj2"
new foo1();			// undefined

// --------------------

var obj3 = {
	id3: "awesome",
	cool: function () {
		console.log(this);
		// console.log( this.id3 );
	}
};

var id3 = "not awesome";

obj3.cool(); // awesome

setTimeout(obj3.cool , 100 ); // global obj

//

function baz4() {
	// стек вызовов: `baz`
	// поэтому наша точка вызова — глобальная область видимости

	bar4(); // <-- точка вызова для `bar`
}

function bar4() {
	// стек вызовов: `baz` -> `bar`
	// поэтому наша точка вызова в `baz`

	foo4(); // <-- точка вызова для `foo`
}

function foo4() {
	// стек вызовов: `baz` -> `bar` -> `foo`
	// поэтому наша точка вызова в `bar`
}

baz4(); // <-- точка вызова для `baz`

// -------------------

/* this зсилається на 
1. по замовчуванню  - на глобальний обєкт ( window в браузері ), strict mode - undefined
*/

function foo5() {
	// "use strict";
	// console.log( this.a );
}

var a = 2;

foo5(); // 2, strict - undefined

// 2. не явна привязка, 

function foo6() {
	console.log( this.a7 );
}

var obj6 = {
	a7: 2,
	foo: foo6
};

// obj6.foo(); // 2, this це obj6

// при присвоюванні змінній силки на функцію,  this буде зсилатися на глобальний обєкт ( strict - undefined )

var a7 = obj6.foo;

a7(); // undefined
setTimeout( obj6.foo, 0 ); // undefined

// 3. явна привязка - call, apply, bind 

// 4. привязка через new

function foo8(a) {
	this.a = a;
}

var bar8 = new foo8( 2 );
console.log( bar8.a ); // 2