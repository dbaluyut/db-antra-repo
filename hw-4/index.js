let todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
]

const cssJs = {
  completed: 'completed',
}

const domSel = {
  todoList: '.todo-list',
  deleteBtn: '.todo-item_delete',
  todoCount: '.todo-footer_count',
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id != id)
}

function todoTemplate(todosArr) {
  return todosArr
    .map((todo) => {
      return `<div class="todo-item" id="todo-${todo.id}">      
            <p class="todo-item_title
            ${!todo.completed ? 'completed' : ''}">${todo.title}</p>
            <span class="todo-item_delete">x</span>
        </div>`
    })
    .join('')
}

function render(elHtml, template) {
  document.querySelector(elHtml).innerHTML = template
}

function markComplete(id) {
  todos = todos.map((todo) => (todo.id == id ? (todo.completed = false) : todo))
}

function setUpEvent() {
  document.querySelector(domSel.todoList).addEventListener('click', (e) => {
    if (e.target.classList.contains('todo-item_delete')) {
      const id = e.target.parentElement.id.substring(3)
      deleteTodo(id)
      render(domSel.todoList, todoTemplate(todos))
    }
  })

  document.querySelector(domSel.todoList).addEventListener('click', (e) => {
    const isTitle = e.target.classList.contains('.todo-item_title')

    if (isTitle) {
      console.log(isTitle)
      const id = e.target.parentElement.id.substring(3)
      markComplete(id)
      render(domSel.todoList, todoTemplate(todos))
    }
  })
}

render(domSel.todoList, todoTemplate(todos))
render(domSel.todoCount, todos.length + ' todos left')
setUpEvent()
