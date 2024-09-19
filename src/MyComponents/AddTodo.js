import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be empty");
        }

        props.addTodo(title,desc);
    }

    let AddTodoStyles = {
        marginTop:"110px"
    }
  return (
    <div className='container my-4' style={AddTodoStyles} >
        <h3 className='text-center'>Add a task</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor= "title" className="form-label">Task Name</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor= "desc" className="form-label">Task Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}

export default AddTodo
