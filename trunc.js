const trunc1 = Math.trunc(24.2);
const trunc2 = Math.trunc(42.812345);
const trunc3 = Math.trunc(-0.88);
const trunc4 = Math.trunc('-1.123');
const trunc5 = Math.trunc(NaN);
const trunc6 = Math.trunc('foo');
const trunc7 = Math.trunc();
const trunc8 = Math.trunc(0.88);

console.log(trunc1);
console.log(trunc2);
console.log(trunc3);
console.log(trunc4);
console.log(trunc5);
console.log(trunc6);
console.log(trunc7);
console.log(trunc8);