import React from "react";
import TaskCard from "./TaskCard";
import { Box } from "@mui/material";

const TaskList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <Box gap={10} display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
      {todos.map((todo, index) => (
        <TaskCard
          index={index}
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </Box>
  );
};

export default TaskList;
