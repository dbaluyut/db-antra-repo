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
            ${todo.completed ? 'completed' : ''}">${todo.title}</p>
            <span class="todo-item_delete">x</span>
        </div>`
    })
    .join('')
}

function render(elHtml, template) {
  document.querySelector(elHtml).innerHTML = template
}

function markComplete(id) {
  todos = todos.map((todo) => {
    if (todo.id == id) {
      return {
        userId: todo.userId,
        id: todo.id,
        title: todo.title,
        completed: true,
      }
    } else {
      return todo
    }
  })
}

function setUpEvent() {
  document.querySelector(domSel.todoList).addEventListener('click', (e) => {
    if (e.target.classList.contains('todo-item_delete')) {
      const id = e.target.parentElement.id.substring(5)
      deleteTodo(id)
      render(domSel.todoList, todoTemplate(todos))
    }

    const isTitle = e.target.classList.contains('todo-item_title')

    if (isTitle) {
      const id = e.target.parentElement.id.substring(5)
      console.log(id)
      markComplete(id)
      console.log(todos)
      render(domSel.todoList, todoTemplate(todos))
    }
  })
}

function setupSubmitEvent() {
  document.querySelector('.todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.querySelector('.todo-form_input').value
    todos.unshift({
      userId: 1,
      id: Math.random() * 10,
      title: title,
      completed: false,
    })
    render(domSel.todoList, todoTemplate(todos))
  })
}

render(domSel.todoList, todoTemplate(todos))
render(domSel.todoCount, todos.length + ' todos left')
setUpEvent()
setupSubmitEvent()
