import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React from "react";
import { Link } from "react-router-dom";

const StudentItem = (studentData) => {
  const { id, firstName, lastName, email, phone, address } = studentData;

  const handleDelete = () => {
    console.log("item deleted");
  };

  return (
    <Grid sm={3} item>
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" gutterBottom>
            {firstName} {lastName}
          </Typography>
          <IconButton component={Link} to={`/students/${id}`}>
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography variant="caption">{phone}</Typography>
        <Typography variant="caption">{email}</Typography>
        <Typography variant="caption">{address}</Typography>
        <Button
          component={Link}
          to={`/students/edit/${id}`}
          variant="outlined"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button startIcon={<DeleteOutlineIcon />} onClick={handleDelete}>
          Delete
        </Button>
      </Paper>
    </Grid>
  );
};

export default StudentItem;
