import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function Project() {
  const [Todos, setTodos] = useState([]);
  const {project_id} = useParams();
  const {todo_id} = useParams();


  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/projects/${project_id}/todos`)
      .then((body) => body.json())
      .then((json) => setTodos(() => [...json]));
      console.log(Todos)
  }, [project_id, todo_id]);


  return (
    <>
    <div>
      <p>Hello this is project {project_id}'s todos route</p>
      <ul>
        {Todos.map((a_todo) => (
          <a href="/projects/project_id" onclick="location.href=this.href+'/project_id';return false;">
            <li key={a_todo.todo_id}>
            <p>{a_todo.title}</p>
          </li> </a>
        ))}
      </ul>
      </div>
    </>
  );
}

export default Project;