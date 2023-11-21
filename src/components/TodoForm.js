import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm my-6 flex items-center">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input outline-none bg-gray-600 border border-[#3d3392] p-2  text-[#fff] w-10/12" placeholder="What is task for today?" />
    <button type="submit" className='todo-btn bg-[#3d3392] hover:bg-[#0766AD] text-white  border-none py-[.55rem] w-2/12'>Add</button>
  </form>
  )
}
