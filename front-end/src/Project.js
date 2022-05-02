import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function Project() {
  const [todos, setTodos] = useState([]);
  const {project_id} = useParams();
  const {todo_id} = useParams();

  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/projects/${project_id}/todos`)
      .then((body) => body.json())
      .then((json) => setTodos(() => [...json]));
  }, [project_id, todo_id]);


  return (
    <>
      <p>Hello this is project {project_id}'s todos route</p>
      <ul>
        {todos.map((todo) => (
          <a href="/projects/project_id" onclick="location.href=this.href+'/project_id';return false;"><li key={todos.todo_id}>
            <p>{todo.title}</p>
          </li> </a>
        ))}
      </ul>
    </>
  );
}

export default Project;