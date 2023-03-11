const getYymmdd = (date) => {
    const yyyy = date.getFullYear();
    //삼항연산자 이용해서 한 자리로 나오는 달은 앞에 0 붙여주기
    const mm = date.getMonth() < 9? `0${date.getMonth()+1}`: (date.getMonth()+1);
    //삼항연산자 이용해서 한 자리로 나오는 일은 앞에 0 붙여주기
    const dd = date.getDate() < 10? `0${date.getDate}`:date.getDate();
    return`${yyyy}-${mm}-${dd}`;
};

const yymmdd = getYymmdd(new Date());
const yymmdd170909 = getYymmdd(new Date(2017, 9, -1, 9));
console.log(yymmdd);
console.log(yymmdd170909);