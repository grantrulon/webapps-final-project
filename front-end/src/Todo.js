import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function Todo() {
  const [todo, setTodo] = useState({});
  const {project_id} = useParams();
  const {todo_id} = useParams();
  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/projects/${project_id}/todos/${todo_id}`)
      .then((body) => body.json())
      .then((json) => setTodo(() => json));
      console.log(todo.name);
  }, [project_id, todo_id]);

  function checkCompleted(todoCompleted) {
    if (todoCompleted) {
      return "True"
    }
    else {
      return "False"
    }
  }

  function deleteTodo() {
    fetch(`http://localhost:8000/projects/${project_id}/todos/${todo_id}`, {
      method: "DELETE",
      mode: 'cors'
    });
    window.location.replace(`/${project_id}/todos/`);
  }


  return (
    <>
    <div>
      <p>Hello this is project {project_id}'s todo {todo_id} route</p>
      <ul>
        <li><p>Todo Title: {todo.title}</p></li>
        <li><p>Todo Description: {todo.description}</p></li>
        <li><p>Todo Completed: {checkCompleted(todo.completed)}</p></li>
      </ul>
      <button type="submit" onClick={deleteTodo}>Delete Todo</button>
      </div>
    </>
  );
}

export default Todo;