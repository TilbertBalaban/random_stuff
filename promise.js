const a1 = new Promise((res, rej) => {
	console.log('1') // 1
	res();
});

a1.then(() => {
	console.log('2') // 4
})

console.log('3'); // 2

Promise.resolve('resolve').then((val) => {
	console.log('4', val) // 5
})

console.log('5') // 3

// ----