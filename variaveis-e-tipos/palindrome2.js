let phrase = 'amor roma'
let palindrome = ''

palindrome = phrase.split('').reverse().join('')

if (!phrase) {
    console.log("Erro, String nula ou inválida");
}
else if (phrase === palindrome){
    console.log("É palindromo");
}else{
    console.log("Não é palindromo");
}
