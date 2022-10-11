function fib(n) {
  if (!n) return 0n;
  const result = [0, 1];
  const positiveN = n < 0 ? n-n-n: n;
  
  const calc = () => {
    const { length } = result;
    result.push(result[length - 1] + result[length - 2]);
    if (length < positiveN) {
      calc();
    }
  };
  calc();
  console.log(n < 0 ? -BigInt(result[result.length - 1]): BigInt(result[result.length - 1]));
  return n < 0 ? -BigInt(result[result.length - 1]): BigInt(result[result.length - 1]);
}

fib(-1)