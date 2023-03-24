const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const stringDiv = '<div>특별가 - </div><h2>99,000원</h2>';
const replaceH1 = string.replace(/<.{0,1}h1>/g, '');//h1 앞에 어떤 문자열이 0개이거나 1개 있을 수도 있다. <h1></h1> 둘 다 해당
const replaceTags = stringDiv.replace(/<.{0,4}>/g, '');//<로 시작하고 어떤 글자가 0개~4개가 있고>로 끝남. 모든 태그 해당

console.log(replaceH1);
console.log(replaceTags);