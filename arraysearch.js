const destinationName=[
    '런던',
    '로마',
    '파리',
    '암스테르담'
];

const searchDestination = '파리';

for(let i = 0; i < destinationName.length; i++){
    if(searchDestination===destinationName[i]){
        console.log(searchDestination, '입니다');
        break;
    }
}