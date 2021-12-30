let phrase = 'amor roma'
let palindrome = ''

for(let i = phrase.length; i>= 0; i--){
    palindrome = palindrome.concat(phrase.charAt(i))
    
}

if (!palindrome) {
    console.log("Erro, string inválida ou vazia");
}
else if (palindrome === phrase){
    console.log("É um palindromo");
}else{
    console.log("Não é um palindromo");
}

