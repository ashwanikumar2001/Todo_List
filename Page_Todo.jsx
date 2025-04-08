import React, { useState } from 'react'



function Page() {
   const [todo,setToDo]=useState("");
   const [mainTask,setMainTask]=useState([]);

   const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
   }

   const submitHandler = (e)=>{
    e.preventDefault();
    setMainTask([...mainTask,{todo}])
    setToDo("");
   }
   let renderTask = <h3 className='text-center'>No Task Available</h3>
   if(mainTask.length > 0){
   renderTask =  mainTask.map((t,i)=>{
     return (
        <li key={i} className='flex justify-between mx-6 '>
            <div className='my-2'>
              <h5>{t.todo}</h5>
            </div>
            <button onClick={()=>{
                deleteHandler(i)
            }} className='bg-orange-400 text-white font-bold m-2 p-1 rounded-lg'>delete</button>
        </li>
        
     )
   })
   }
  return (
    <>
      <form onSubmit={submitHandler}>
            <div className="addToDo">
              <h3 className='mx-4 font-bold p-2'>Add a Task</h3>
              <input type='text' value={todo} onChange={(e)=>{setToDo(e.target.value)}} className='bg-white mx-4 w-2/3 border-2 rounded-b-md '/>
              <button className="bg-blue-700 text-white rounded-md px-6 font-bold">Add</button>
            </div>
        </form>
        <h3 className='text-lg font-bold m-5'>YOUR ToDO'S</h3>
        <div>
            <ul className='bg-blue-200 mx-6 rounded-2xl'>
               
                <li>{renderTask}</li>
            </ul>
        </div>
    </>
  )
}

export default Page;