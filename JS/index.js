const input = document.getElementById('todoText');
const add = document.getElementById('todoAdd');
const ul = document.getElementById('todoList');

let items = 0;

function addTodo() {
    if (input.value.trim() === ''){
        alert('Please enter a task!');
        return;
    }
    else{
        let li = document.createElement('li')

        let output = document.createElement('span');
        output.textContent = input.value;

        let deleteBtn = document.createElement('button')
        deleteBtn.id = `delete${items}`;
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function(){
            deleteTodo(deleteBtn);
        }

        li.appendChild(output)
        li.appendChild(deleteBtn)
        ul.appendChild(li)

        input.value = '';
        items++;
    }
}

function deleteTodo(btn){
    ul.removeChild(btn.parentElement);
}