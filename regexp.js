// /     /g <-- 정규표현식
const string = '<h1>:::특별가 - 99000원::: </h1>';
const result1 = string.replace(/<h1>/g,'');//앞부분 h1 태그 없애기
console.log(result1);

const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g, '');// \이스케이프 이용해서 /가 문자열임을 알려 줌
console.log(result2);