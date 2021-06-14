import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo

  const title = todo.title
  const id = todo.id
  const status = todo.completed

  LogTodo(id, title, status)
})

const LogTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    id: ${id}
    title: ${title}
    finished?: ${completed}
  `)
}