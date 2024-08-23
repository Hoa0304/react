import { Routes, Route, Link, NavLink } from "react-router-dom";
import TodoFeature from "./state/filterTodo/todoFeature";

function App() {
  return (
    <div>
      <nav>
        <Link to="/todo">Todo</Link>
        <NavLink to="/todo" className="active-todo">Todo</NavLink>
      </nav>
      <Routes>
        <Route path="/todo" element={<TodoFeature />} />
      </Routes>
    </div>
  );
}

export default App;