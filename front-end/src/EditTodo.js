import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function EditTodo() {
  const [todoNewTitle, setTitle] = useState();
  const [todoNewDescription, setDescription] = useState();
  const [todoNewCompleted, setCompleted] = useState();
  const [todo_id, setId] = useState();
  const {todoTitle} = useParams();
  const {todoDescription} = useParams();
  const {todoCompleted} = useParams();
  const {project_id} = useParams();

  function EditTodo(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/todos/:todo_id/edit`, {
      method: "PATCH",
      body: JSON.stringify({title: todoNewTitle, quantity: Number(todoNewDescription), price: Number(todoNewCompleted), todo_id: Number(todo_id), project_id: Number(project_id)}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <p>Edit a Todo object:</p>
      <form id="newTodoForm" onSubmit={EditTodo}>
        <input type="text" id="name" value={todoTitle} onChange={(e) => setTitle(e.target.value)}/>
        <label>Todo Title</label> <br></br>
        <input type="text" id="quantity" value={todoDescription} onChange={(e) => setDescription(e.target.value)}/>
        <label>Todo Description</label> <br></br>
        <input type="text" id="price" value={todoCompleted} onChange={(e) => setCompleted(e.target.value)}/>
        <label>Todo Completed</label> <br></br>
        <input type="text" id="todo_id" value={todo_id} onChange={(e) => setId(e.target.value)}/>
        <label>Todo Id</label> <br></br>
        <button type="submit">Add</button>
      </form>
    </>
  );
  }

export default EditTodo;


