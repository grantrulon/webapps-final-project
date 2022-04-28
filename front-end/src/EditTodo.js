import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function EditTodo() {
  const [todoTitle, setTitle] = useState();
  const [todoDescription, setDescription] = useState();
  const [todoCompleted, setCompleted] = useState();
  const [todo_id, setId] = useState();
  const {project_id} = useParams();

  function EditTodo(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/todos/`, {
      method: "PATCH",
      body: JSON.stringify({name: todoTitle, quantity: Number(todoDescription), price: Number(todoCompleted), todo_id: Number(todo_id), project_id: Number(project_id)}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <p>Edit a Todo object:</p>

    </>
  );
  }

export default EditTodo;


