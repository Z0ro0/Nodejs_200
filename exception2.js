const printHello = () => console.log('hello');

try{
    printHello();
}catch(e){
    console.log(e);
}finally{
    console.log('finally1');
}

try{
    printBye();//함수가 없기 때문에 에러 출력
}catch(e){
    console.log(e);
}finally{
    console.log('finally2');
}