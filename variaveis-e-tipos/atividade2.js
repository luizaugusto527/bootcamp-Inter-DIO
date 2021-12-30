let arry = [1, 3, 4, 6, 80, 33, 23, 90]

if(arry.length === 0){
    console.log(-1);
}else{
    arry.forEach((el,index)=>{
       if( el % 2 === 0)  arry[index] = 0
    })
}

console.log(arry);