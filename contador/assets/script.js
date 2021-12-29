const currentNumber = document.querySelector('#currentNumber')
const adicionar =  document.querySelector('#adicionar')
const subtrair =  document.querySelector('#subtrair')

let count = Number(currentNumber.innerText)

adicionar.addEventListener('click',increment)
subtrair.addEventListener('click',decrement)

function decrement() {

    currentNumber.innerText = --count
    verifyValue()
    
}

function increment() {
    currentNumber.innerText = ++count
    verifyValue()

}

function verifyValue() {
    console.log(count);
    count <=0 ? subtrair.disabled = true: subtrair.disabled = false
    count >=10 ? adicionar.disabled = true: adicionar.disabled = false   
}