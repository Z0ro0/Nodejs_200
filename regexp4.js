//[바꾸고 싶은 문자]/g

const string = '(<h1>특별가 - </h1><h2>99,000원</h2>)';

const replacedBracket = string.replace(/[()]/g, '');// ()없애기
const replacedBracketOrSlashHyphenComma = string.replace(/[()/\-,]/g, '');// () / \ - , 없애기

console.log(replacedBracket);
console.log(replacedBracketOrSlashHyphenComma);