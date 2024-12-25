const input = document.getElementById('todoText');
const add = document.getElementById('todoAdd');
const ul = document.getElementById('todoList');

let items = 0;

function addTodo() {
    if (input.value === ''){
        alert('Please enter a task!');
        return;
    }
    else{
        let li = document.createElement('li')

        let output = document.createElement('span');
        li.className = 'todo-item';
        output.textContent = input.value;

        let editBtn = document.createElement('button')
        editBtn.type = 'button';
        editBtn.id = 'edit${items}';
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.onclick = function(){
            editTodo(output, editBtn)
        }

        let deleteBtn = document.createElement('button')
        deleteBtn.id = 'delete${items}';
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function(){
            deleteTodo(deleteBtn);
        }
 

        li.appendChild(output)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        ul.appendChild(li)

        input.value = '';
        items++;
    }
}

function deleteTodo(btn){
    ul.removeChild(btn.parentElement);
}

function editTodo(output, editBtn){
    if(editBtn.type === 'button'){
        let newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.value = output.textContent;
        output.replaceWith(newInput);
        editBtn.textContent = 'Save';
        editBtn.type = 'submit';
    }
    else{  
        output.textContent = editBtn.previousSibling.value;
        editBtn.previousSibling.replaceWith(output);
        editBtn.textContent = 'Edit';
        editBtn.type = 'button';
    }
}