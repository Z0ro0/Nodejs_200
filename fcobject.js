function plus(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

let p = plus;
console.log('typeof plus: %s', typeof plus);
console.log('typeof p: %s', typeof p);//let p = plus; plus 함수를 p에 넣었기 때문
console.log('typeof 10+20: %d', typeof p(10, 20));

function calculate(a, b, func){
    return func(a, b);
}

console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));