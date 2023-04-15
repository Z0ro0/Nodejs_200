const sumNum = (start, end, accumulator) =>{
    if(start>end)return accumulator;
    return sumNum(start+1, end, accumulator+start);
};

console.log(sumNum(1, 10, 0));