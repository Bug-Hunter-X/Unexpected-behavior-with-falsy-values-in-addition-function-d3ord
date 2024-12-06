function foo(a, b) {
  // Check if the values are numbers or can be converted to numbers.
  if (typeof a !== 'number' || typeof b !== 'number') {
    a = Number(a);
    b = Number(b);

    // Check if values are NaN after conversion
    if (isNaN(a) || isNaN(b)) {
      return 0; // or throw an error: throw new Error('Invalid input: Arguments must be numbers or convertible to numbers.');
    }
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo(0, 2)); // 2
console.log(foo('', 2)); // 2
console.log(foo(false, 2));// 2