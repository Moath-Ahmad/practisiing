var bar = 'bar';
console.log(bar);
bar.toUpperCase();
console.log(bar);

bar = bar.toUpperCase();
console.log(bar)

console.log('-------------------')
let foo = [];
console.log(foo);
foo.push('12334');
console.log(foo);
foo[0].toUpperCase();
console.log(foo)
foo[0] = foo[0].toUpperCase()
console.log(foo)
console.log(Symbol(foo[0]));
console.log(foo.valueOf());

