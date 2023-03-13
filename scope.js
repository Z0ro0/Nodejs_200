let resultSubtraction;
function subtraction(a, b){
    resultSubtraction = a - b;
}//전역 변수라서 가능

subtraction(100, 50);
console.log(resultSubtraction);

function multiple(a, b){
    const result = a + b;
    return result;
}//변수에 익명함수 형태로 함수 정의

const r = multiple(10, 10);
console.log(r);

function sum(a, b){
    const resultSum = a + b;
}//지역 변수

sum(20, 20);
console.log(resultSum);