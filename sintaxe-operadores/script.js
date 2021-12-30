function numbers(num1,num2) {
    let igual,soma,compareTen,comparetwenty
    
    soma = num1 + num2

    num1 === num2 ? igual = 'são iguais':igual = 'não são iguais'
    
    soma > 10 ? compareTen = 'maior' : compareTen = 'menor'
    soma > 20 ? comparetwenty = 'maior' : comparetwenty = 'menor'
    
    console.log(`Os números ${num1} e ${num2} ${igual}.Sua soma é ${soma},que é ${compareTen} que 10  e ${comparetwenty} que 20`);
}

numbers(5,5)

