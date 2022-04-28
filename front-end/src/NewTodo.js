import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function New() {
  const [todoTitle, setTitle] = useState();
  const [todoDescription, setDescription] = useState();
  const [todoCompleted, setCompleted] = useState();
  const [todo_id, setId] = useState();
  const {project_id} = useParams();

  function addNewItem(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/todos/`, {
      method: "POST",
      body: JSON.stringify({name: todoTitle, quantity: Number(todoDescription), price: Number(todoCompleted), todo_id: Number(todo_id), project_id: Number(project_id)}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <p>Add A New Item:</p>
      <form id="newItemForm" onSubmit={addNewItem}>
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

export default New;


