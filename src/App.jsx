import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import {
  addTodo,
  deleteTodo,
  editTodo,
  loadTodosFromLocalStorage,
} from "./redux/reducers";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const isInitialMount = useRef(true);

  useEffect(() => {
    console.log("Dispatching loadTodosFromLocalStorage");
    dispatch(loadTodosFromLocalStorage());
  }, [dispatch]);

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleEditTodo = (todo) => {
    dispatch(editTodo(todo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <NavBar />
      <Stack maxWidth={"xl"} mx={30} spacing={4} my={20}>
        <TaskInput addTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          editTodo={handleEditTodo}
          deleteTodo={handleDeleteTodo}
        />
      </Stack>
    </>
  );
}

export default App;
