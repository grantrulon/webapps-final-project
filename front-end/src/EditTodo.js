import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function EditTodo() {
  const [todoNewTitle, setTitle] = useState();
  const [todoNewDescription, setDescription] = useState();
  const [todoNewCompleted, setCompleted] = useState();
  const [old_todo, setTodo] = useState({});
  const {todo_id} = useParams();
  const {project_id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/projects/${project_id}/todos/${todo_id}`)
      .then((body) => body.json())
      .then((json) => setTodo(() => json));
      console.log(old_todo)
  }, [todo_id, project_id]);

  function EditTodo(e){
    e.preventDefault();
    fetch(`http://localhost:8000/projects/${project_id}/todos/:todo_id/`, {
      method: "PATCH",
      body: JSON.stringify({title: todoNewTitle, description: Number(todoNewDescription), completed: Number(todoNewCompleted), todo_id: Number(todo_id), project_id: Number(project_id)}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.replace(`/${project_id}/todos`);
  }

  return (
    <>
      <p>Edit a Todo object:</p>
      <form id="newTodoForm" onSubmit={EditTodo}>
        <input type="text" id="title" defaultValue={old_todo.title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Todo Title</label> <br></br>
        <input type="text" id="description" defaultValue={old_todo.description} onChange={(e) => setDescription(e.target.value)}/>
        <label>Todo Description</label> <br></br>
        <input type="text" id="completed" defaultValue={old_todo.completed} onChange={(e) => setCompleted(e.target.value)}/>
        <label>Todo Completed</label> <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
  }

export default EditTodo;


