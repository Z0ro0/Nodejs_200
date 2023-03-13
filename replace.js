const greeting = 'hello';
const dateString = '2007-08-24T11:00:00';
const smallBracket = '()';

const replacedGreeting = greeting.replace('el','');
const replacedDateString = dateString.replace('T',' ');
const replacedsmallBracket = smallBracket.replace('(', '{').replace(')', '}');

console.log(replacedGreeting);
console.log(replacedDateString);
console.log(replacedsmallBracket);