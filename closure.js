const add1 = (x) => {
  // x = 5, y = 3
  return (y) => x+y;
}

const a = add1(5)(3);

// console.log('q', a)

const user = () => {
	let username, password;

	const login = (user,pw) => {
		username = user;
		password = pw;
	}

  print = () => {
    console.log(username, password);
  }

	return {
		login,
    print,
	};
}

const fred = user();

fred.login( "fred", "12Battery34!" );

fred.print();