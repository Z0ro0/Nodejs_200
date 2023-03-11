const isNan123 = isNaN(123);
const isNanMinus123 = isNaN(-123);
const isNan234 = isNaN('234');
const isNanHello = isNaN('hello');

console.log(isNan123);///false
console.log(isNanMinus123);//false
console.log(isNan234);//false
console.log(isNanHello);//true