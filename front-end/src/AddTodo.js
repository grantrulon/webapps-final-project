import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function AddTodo() {
  const [todoTitle, setTitle] = useState();
  const [todoDescription, setDescription] = useState();
  const [todoCompleted, setCompleted] = useState();
  const [todo_id, setId] = useState();
  const {project_id} = useParams();

  function AddTodo(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/todos/`, {
      method: "POST",
      body: JSON.stringify({title: todoTitle, description: todoDescription, completed: Boolean(todoCompleted), todo_id: Number(todo_id), project_id: Number(project_id)}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.replace(`/${project_id}/todos/${todo_id}`);
  }

  return (
    <>
      <p>Add a new Todo:</p>
      <form id="newTodoForm" onSubmit={AddTodo}>
        <input type="text" id="name" value={todoTitle} onChange={(e) => setTitle(e.target.value)}/>
        <label>Todo Title</label> <br></br>
        <input type="text" id="quantity" value={todoDescription} onChange={(e) => setDescription(e.target.value)}/>
        <label>Todo Description</label> <br></br>
        <input type="text" id="price" value={todoCompleted} onChange={(e) => setCompleted(e.target.value)}/>
        <label>Todo Completed (True/False)</label> <br></br>
        <input type="text" id="todo_id" value={todo_id} onChange={(e) => setId(e.target.value)}/>
        <label>Todo Id</label> <br></br>
        <button type="submit">Add</button>
      </form>
    </>
  );
  }

export default AddTodo;


