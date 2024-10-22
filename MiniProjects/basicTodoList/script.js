const todoList = [{
    
}];

function renderTodoList()
{   

    let todoListHTML = '';
    for(let i = 1 ; i<todoList.length; i++)
    {
        const html = `
        <div>${todoList[i].name}</div>
        <div>${todoList[i].date}</div>
        <button onclick="
        todoList.splice(${i} , 1);
        renderTodoList(); 
        " class="delete-todo-button">Delete
        </button>
       `;
        todoListHTML += html;
    }
   
    document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
    todoListHTML = ''; 

    
}
function addTodo()
{
    
    const inputElement = document.querySelector('.js-name-input');

    const inputDate = document.querySelector('.js-date-input');

    const name = inputElement.value;
    const date = inputDate.value;

    const input = {
        name,
        date
    }
    todoList.push(input);

    inputElement.value = '';
    renderTodoList();
    localStorage.setItem('todoList', todoList);
}