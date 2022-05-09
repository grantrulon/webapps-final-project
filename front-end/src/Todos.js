import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
function Todos() {
  const [todos, setTodos] = useState([]);
  const {project_id} = useParams();
  const {_id} = useParams();

  //Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/projects/${project_id}/todos`)
      .then((body) => body.json())
      .then((json) => setTodos(() => [...json]));
  }, [project_id, _id]);

  function routeAdd() {
    window.location.replace(`/${project_id}/todos/add`);
  }

  function deleteProject() {
    fetch(`http://localhost:8000/projects/${project_id}`, {
      method: "DELETE",
      mode: 'cors'
    });
    window.location.replace(`/`);
  }

  return (
    <>
    <div>
      <p>Hello this is project {project_id}'s todos route</p>
      <ul>
        {todos.map((todo) => (
          <li key={todos._id}>
            <p>{todo.title}</p>
          </li>
        ))}
      </ul>
      <button type="submit" onClick={routeAdd}>Add Todo</button>
      <button type="submit" onClick={deleteProject}>Delete Project</button>
      </div>
    </>
  );
}

export default Todos;