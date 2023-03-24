const text = 'hello my name is kyeongrok';
const matched = text.match(/[a-l]{1,3}/g);//a~l까지 1개 이상 3개 이하인 문자열 추출

console.log(matched);