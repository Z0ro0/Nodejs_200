const randomNumber = Math.random();// 0.74836...
const zeroToNice = Math.floor(Math.random()*10, 10);//8에서 9
const twentyToThirty = Math.floor(Math.random()*((30-20)+1), 10)+20;//20에서 30
const oneToTen = Math.floor(Math.random()*10, 10)+1;//1에서 10
const makeRandom = (min, max) => Math.floor(Math.random(Math.random()*((max-min)+1), 10))+min;

console.log(randomNumber);
console.log(zeroToNice);
console.log(twentyToThirty);
console.log(oneToTen);

for(let value = 1; value < 10; value++){
    console.log(makeRandom(10, 20));
}