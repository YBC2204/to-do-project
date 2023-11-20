import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo flex justify-between items-center bg-[#3d3392] text-white py-3 px-4 rounded-lg mb-4">
        <p className={`${task.completed ? "completed" : "incompleted"}`}>{task.task}</p>
        <div className='icons flex gap-4'>
        <FontAwesomeIcon className='cursor-pointer' onClick={() => toggleComplete(task.id)} icon={faCheck} />
        <FontAwesomeIcon className='cursor-pointer' icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="cursor-pointer" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        
        </div>
    </div>
  )
}
