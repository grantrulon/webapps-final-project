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

  return (
    <>
      <p>Hello this is project {project_id}'s todos route</p>
      <ul>
        {todos.map((todo) => (
          <li key={todos._id}>
            <p>{todo.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;