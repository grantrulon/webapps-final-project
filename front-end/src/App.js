import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Projects from "./Projects";
import Project from "./Project";
import Todos from "./Todos";
import Todo from "./Todo";
import AddProject from "./AddProject";
import AddTodo from "./AddTodo";
import EditProject from "./EditProject";
import EditTodo from "./EditTodo";

function App() {
  return (
    <>

    {/* - Projects.js
            - /
            - /projects
        - Project.js
            - /:project_id
        - AddProject.js
            - /projects/add 
        - EditProject.js    
            - /projects/:project_id/edit
        - Todos.js
            - /:project_id
            - /:project_id/todos
        - Todo.js
            - /:project_id/todos/:todo_id
        - AddTodo.js
            - /:project_id/todos/add
        - EditTodo.js
            - /project_id/todos/:todo_id/edit
     */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/add" element={<AddProject />} />
          <Route path="/add" element={<AddProject />} />
          <Route path="projects/:project_id">
            <Route path="" element={<Todos />} />
            <Route path="edit" element={<EditProject />} />
            <Route path="todos" element={<Todos />} />
            <Route path="todos/:todo_id" element={<Todo />} />
            <Route path="todos/:todo_id/edit" element={<EditTodo />} />
            <Route path="todos/add" element={<AddTodo />} />
          </Route>
          <Route path="/:project_id">
            <Route path="" element={<Todos />} />
            <Route path="edit" element={<EditProject />} />
            <Route path="todos" element={<Todos />} />
            <Route path="todos/:todo_id" element={<Todo />} />
            <Route path="todos/:todo_id/edit" element={<EditTodo />} />
            <Route path="todos/add" element={<AddTodo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
