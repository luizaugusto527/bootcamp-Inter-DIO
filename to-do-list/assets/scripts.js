const input = document.querySelector('#task-input')
const tasks = document.querySelector('#tasks')
const button = document.querySelector('button')

function addTask(e) {
    e.preventDefault()
    createCheckBox()
   
}


button.addEventListener('click',addTask)

function createCheckBox() {
    let div = document.createElement('div')
    tasks.appendChild(div)
    let checkBox = document.createElement('input')
    checkBox.setAttribute('type','checkbox')
    div.appendChild(checkBox)
    writeTask(div);
}

function writeTask(div) {
    let label = document.createElement('label')
    tasks.appendChild(label) 
    label.innerText = input.value
    div.appendChild(label) 
}