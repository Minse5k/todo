import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
