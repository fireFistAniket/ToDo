import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Badge, CardHeader, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import LabelIcon from "@mui/icons-material/Label";
import EditModal from "./EditModal";

export default function TaskCard({ todo, editTodo, deleteTodo, index }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelComplete = () => {
    editTodo({
      id: todo.id,
      text: todo.text,
      status: "complete",
    });
    setAnchorEl(null);
  };
  return (
    <>
      <Card sx={{ minWidth: 345 }}>
        <CardHeader
          title={`Task ${index + 1}`}
          sx={{ borderBottom: "1px solid #898282" }}
          action={
            <IconButton
              color={"primary"}
              size={"large"}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          subheader={
            <Badge
              sx={{
                backgroundColor:
                  todo.status == "complete" ? "#00c853" : "#ffab00",
                paddingX: 1,
                paddingY: 0.5,
              }}
            >
              <Typography
                textTransform={"capitalize"}
                fontWeight={"600"}
                color={"#eeeeee"}
                fontSize={12}
              >
                {todo.status}
              </Typography>
            </Badge>
          }
        ></CardHeader>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          <MenuItem onClick={() => setOpenEditModal(true)} fontSize={"large"}>
            <ModeEditIcon color={"primary"} />{" "}
            <Typography variant="button" align="center">
              Edit
            </Typography>
          </MenuItem>
          <MenuItem onClick={handelComplete} fontSize={"large"}>
            <LabelIcon color={"success"} />{" "}
            <Typography variant="button" align="center">
              Mark as Complete
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => deleteTodo(todo.id)} fontSize={"large"}>
            <DeleteIcon color={"error"} />{" "}
            <Typography variant="button" align="center">
              Delete
            </Typography>
          </MenuItem>
        </Menu>
        <CardContent>
          <Typography fontSize={25}>{todo.text}</Typography>
        </CardContent>
      </Card>
      <EditModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        todo={todo}
        editTodo={editTodo}
      />
    </>
  );
}
