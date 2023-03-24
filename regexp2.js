//.은 한 개의 글자를 의미
const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const result1 = string.replace(/<..>/g, '');//<h1><h2> 선택되어서 ''로 교체
const result2 = string.replace(/<.../g, '');//<h1> </h1, <h2>, </h2 선택되어서 ''로 교체

console.log(result1);
console.log(result2);