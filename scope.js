function foo1(a1) {
	// console.log( a1 + b1 ); // 4
}
let b1 = 2;
foo1( 2 );

/* важливо, де викликається функція. на моменті ініціалізаціїї змінна b - відстуня, на момент виклику доступна у лобальній області видимості) */

function foo12(a12) {
	var b12 = a12 * 2;

	function bar(c12) {
		// console.log( a12, b12, c12, d12, e12 ); // 2 4 12 5 6
	}
  // bar(b12 * 3); // ReffernceError з e12 ,без -- 2 4 12 undefined
  var d12 = 5;
  let e12 = 6;

	bar(b12 * 3);
}

foo12( 2 );

// ------------------------------


// console.log(q)  // Reffernce error
// console.log(h) // undefined

let q;
var h = 3;

// let q; // SyntaxError
var h = 4; // 4

/* 

                                                  -- var                 let/const
1. при спробі використати до оголошення, значення -- undefined           Reffernce error  (для var є hoisting)
2. при оголошення двічі змінної                   -- поміняє значення    SyntaxError
3. область видимості                              -- функціональна       блочна
*/

//  ----------------------------------

function foo3(a3) {
  // "use strict";
	// console.log( a3 + b3 ); // Reffernce error  (use strict by default)
	b3 = a3;
}

foo3( 2 );
/* 
                                                 use strict                 lazy mode
1. присвоєнння значення не оголошеній змінній    Reffernce error            створить нові змінну в глобал обл видимості
2. змінні стоврені в eval                        доступні в глобал.обл.в.   доступні в локал обл.в.
*/

function foo4(str, a) {
  // "use strict";
	eval( str );
	// console.log(a, b ); // 1, 3.. with use strict  - 1,2
}

let b4 = 2;

foo4( "var b = 3;", 1 );

/* eval() зменшує продуктивність */

//  ------------------

var obj5 = {
	a: 1,
	b: 2,
	c: 3
};

obj5.a = 2;
obj5.b = 3;
obj5.c = 4;

// console.log(obj5); // { a: 2, b: 3, c: 4 }

with (obj5) {
	a = 3;
	b = 4;
	c = 5;
}

// console.log(obj5); // { a: 3, b: 4, c: 5 }

function foo5(obj) {
	with (obj) {
		a = 2;
	}
}

const o51 = {
	a: 3
};

const o52 = {
	b: 3
};

foo5( o51 ); // поміняли значення a для o51 
// console.log( o51.a ); // 2

foo5( o52 ); // не знайшли а для o52, тому створилася глобальна o52
// console.log( o52.a ); // undefined
// console.log( a ); // 2!!

/* не використовувати width */

// ---------------------------

let a6 = 1;

const foo6 =() => {
  // console.log(a6); // let - refError, var - undefined

  let a6 = 7;
}

foo6();

// -----------------------------


// console.log(b7) // undefined, a7 - refError

{
  let a7 = 5;
  var b7 = 6;
}

// console.log(b7) // 6, a7 - refError

// -------------------

for (var i8=0; i8<10; i8++) {
	// console.log( i );
}

// console.log(i) // 10, let - undefined

// -------------
for(var i9=0; i9<10; i9++) {
  (() => {
    var j = i9;
    setTimeout(function() {
      // console.log(j); // var - 10x10, let - 0..9
    }, 100);
  })();
}
// console.log(i9);

let f = function g() { return 23; };

// console.log( typeof f() ); // g()? 

// foo101(); // refError
// foo(); // TypeError, foo == undefined

var foo100 = function bar() {

};

let foo101 = function bar101() {};

// ----------------

// a110(); // typeError
var a110;

if (true) {
  a110 = function foo110() { console.log( "a" ); }
} else {
  a110 = function foo110() { console.log( "b" ); }
}

/* 
hoisting
1. спливають вар (значення андефайнд)
2. функції (function declaration)
3. присвоєння значень не спливають
*/

var a120 = 4;
let b120 = 4;

(function (){ 
  a120 = 5;
  b120 = 5;
})();

// console.log(a120 , b120)

// --------

if (false) {
  var a130 = 4;
}

// console.log(a130); // undefined, без var - refError

// --------------

// a141(); // typeError, a141 - undefined

let a140 = () => {};
var a141 = () => {};
