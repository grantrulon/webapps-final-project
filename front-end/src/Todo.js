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

  return (
    <>
      <p>Hello this is project {project_id}'s todo {todo_id} route</p>
      <ul>
        <li><p>Todo Name: {todo.name}</p></li>
        <li><p>Todo Quantity: {todo.quantity}</p></li>
        <li><p>Todo Price: {todo.price}</p></li>
      </ul>
    </>
  );
}

export default Todo;