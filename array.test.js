// Benchmark performance of build-in Javascript Array Object

let mark = Date.now();
let newArray = Array.from(Array(20000000).keys());
console.log(newArray.length);
console.log(Date.now() - mark);
mark = Date.now();
newArray.push(newArray.length + 1);
console.log(newArray.length);
console.log(Date.now() - mark);
mark = Date.now();
newArray.pop();
console.log(newArray.length);
console.log(Date.now() - mark);
mark = Date.now();
newArray.splice(1000, 2);
console.log(newArray.length);
console.log(Date.now() - mark);
mark = Date.now();
console.log(newArray.shift(100));
console.log(newArray.length);
console.log(Date.now() - mark);
mark = Date.now();
