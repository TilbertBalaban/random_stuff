/* 
types
1. function declaration
function func() {};
2. function expression
const func = function() {};
3. named function expression
const func = functionName() {}
4. new Function
const foo = new Function(arg1, arg2, 'return arg1 + arg2');
5. arrow function
const foo = () => {}
*/

/* 
	мінуси анонімних функцій
	1. не можливість відписатися при addEventListener і тд
	2. під час рекурсії треба використати arguments.callee 
	3. складність дебагінгу
*/

// цікавий синтаксис
setTimeout(timeoutHandler = () => {
	// console.log( "I waited 1 second!" );
}, 1000 );

timeoutHandler(); // (доступний)

const window = {
	a: 2
};

(function IIFE( global ){

	var a = 3;

	console.log( a ); // 3
	console.log( global.a ); // 2
	global.a = 4;
	console.log( global.a ); // 4
})( window );

console.log( window.a ); // 4