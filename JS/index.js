const input = document.getElementById('todoText');
const add = document.getElementById('todoAdd');
const ul = document.getElementById('todoList');

function addTodo() {
    if (input.value.trim() === ''){
        alert('Please enter a task!');
        return;
    }
    else{
        let li = document.createElement('li')

        let textSpan = document.createElement('span');
        textSpan.textContent = input.value;

        li.appendChild(textSpan)
        ul.appendChild(li)

        input.value = '';
    }
}