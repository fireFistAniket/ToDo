import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const TaskInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        id: Date.now(),
        text,
        status: "pending",
      });
      setText("");
    }
  };

  return (
    <Box
      gap={10}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <TextField
        fullWidth
        multiline={true}
        minRows={10}
        label="Write down your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ minWidth: 125, fontSize: 15 }}
        endIcon={<AddIcon />}
        onClick={handleSubmit}
      >
        Add
      </Button>
    </Box>
  );
};

export default TaskInput;
