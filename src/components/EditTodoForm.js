import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm my-6 flex items-center mx-4">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input outline-none bg-gray-600 border border-[#3d3392] p-2  text-[#fff] w-3/4 h-1/2" placeholder='Update task' />
    <button type="submit" className='todo-btn bg-[#0766AD] hover:bg-[#3d3392] text-white  border-none py-[.55rem] w-1/4 h-1/2 outline-none'><FontAwesomeIcon icon={faArrowRight} /></button>
  </form>
  )
}
