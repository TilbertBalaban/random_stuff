/* 
1. явне
2. не явне
*/

const a1 = 4;
// console.log(a1 + ''); // явне
// console.log(a1.toString()) // не явне

/* 
to string (`${value}`, value + '', value.toString())
{} --> '[object Object]'
[1,2,3] --> '1,2,3'

to number (Number(value), +value, -value)
true --> 1
false, null, "" --> 0
undefined --> NaN
'123' --> 123
's123'--> Nan

toBoolean()
false - null, NaN, undefined, 0, ''
*/

/* 
 +        якщо один з операндів - строка (або перетворюється в примітив строки) - результат буде строка, в іншому випадку - число
 - * /    результат число
*/

/*
object to primitive
1. obj[Symbol.toPrimitive](hint)
(якщо немає) -->
hint === 'string' ? 
2. obj.toString()
3. obj.valueOf()
hint === 'number' or 'default' ?   
2. obj.valueOf()
3. obj.toString()
*/

const user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },

  // toString() {
  //   return `{nameee: "${this.name}"}`;
  // },

  // valueOf() {
  //   return this.money + 10;
  // },
};

// console.log(`${user}`); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500

/* 
==
1. Type(x) такий же, як Type(y), то виконати x === y.
2. x — null і y — undeіfined --- true.
3. x — undefined  y — null --- true.
4. Type(x) — Number і Type(y) — String --- x == ToNumber(y).
5. Type(x) — String і Type(y) — Number --- ToNumber(x) == y.
6. Type(x) — Boolean --- ToNumber(x) == y. (y is primitive)
7. Type(y) — Boolean --- x == ToNumber(y). (x is primitive)
8. Type(x) — String | Number | Symbol | Boolean і Type(y) — Object --- x == ToPrimitive(y).
9. Type(x) — Object і Type(y) — String | Number | Symbol | Boolean --- ToPrimitive(x) == y.
10.Возвратить false.
*/

// console.log(false == '') // true (Number('') - 0, 0 - falsy value)
// console.log(false == []) // true (Number([]) is 0, 0 - falsy value)
// console.log(false == []) // false (Number([1]) is 1, 1 - truly value)
// console.log(false == {}) // false (Number({}) - NaN, NaN !== false)
// console.log('' == 0) // true (Number('') is 0)
// console.log('' == []) // true ([].toString() is '')
// console.log('' == [1]) // false ([].toString() is '1')
// console.log('' == {}) // false (({}).toString() is '[object Object]')
// console.log('[object Object]' == {}) // true
// console.log(0 == []) // true ([].toString() is '' --> 0 == '' --> 0 == Number('') --> 0 == 0)
// console.log(0 == {}) // false (({}).toString() is '[object Object]' --> 0 == '[object Object]' --> 0 == Number('[object Object]') --> 0 == NaN)
// console.log(0 == null) // false, null == null and null == undefined

// [] + null + 1  
// [] + null --> '' + null --> 'null'
// 'null' + 1 --> 'null1'

// 0 || "0" && {}  --> "0" && {} --> {}

// {}+[]+{}+[1]
// {} + [] --> {} is ignored --> +[] --> 0
// 0 + {} --> 0 + '[object Object]' --> '0[object Object]'
// '0[object Object]' + [1] --> '0[object Object]' + '1' --> '0[object Object]1

// !+[]+[]+![] --> (!+[])+[]+(![]) --> (!0)+[]+(![]) --> true + [] + false
// true + [] --> true + '' --> 'true'
// 'true' + false --> 'truefalse


// 4 - "5" + 0xf - "1e1"
// 4 - '5' --> -1
// -1 + 0xf --> number
// number - "1e1" --> number