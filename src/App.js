import { useEffect, useState } from "react";
import TodoApp from "./components/todo/TodoApp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <TodoApp setIsLoggedIn={setIsLoggedIn} />;
}

export default App;
