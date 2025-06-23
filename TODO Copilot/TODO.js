

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
renderTodos();

addBtn.onclick = () => {
  if (input.value.trim()) {
    todos.push(input.value);
    input.value = '';
    saveTodos();
    renderTodos();
  }
};

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.onclick = () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    };
    
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}