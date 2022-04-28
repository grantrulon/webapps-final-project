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
      body: JSON.stringify({title: todoTitle, quantity: Number(todoDescription), price: Number(todoCompleted), todo_id: Number(todo_id), project_id: Number(project_id)}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <p>Add a new Todo:</p>
      <form id="newItemForm" onSubmit={addAddTodoItem}>
        <input type="text" id="name" value={todoTitle} onChange={(e) => setTitle(e.target.value)}/>
        <label>Item Title</label> <br></br>
        <input type="text" id="quantity" value={todoDescription} onChange={(e) => setDescription(e.target.value)}/>
        <label>Item Description</label> <br></br>
        <input type="text" id="price" value={todoCompleted} onChange={(e) => setCompleted(e.target.value)}/>
        <label>Item Completed</label> <br></br>
        <input type="text" id="todo_id" value={todo_id} onChange={(e) => setId(e.target.value)}/>
        <label>Item Id</label> <br></br>
        <button type="submit">Add</button>
      </form>
    </>
  );
  }

export default AddTodo;


