import React from "react";
import { Button, Paper, Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { studentSelector } from "../redux/studentSlice";

const Student = () => {
  const params = useParams();
  const student = useSelector((state) =>
    studentSelector.selectById(state, params.id)
  );
  const { id, firstName, lastName, phone, email, address } = student;

  return (
    <>
      <Paper key={id}>
        <Typography variant="h2" gutterBottom>
          {firstName} {lastName}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {phone}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {email}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {address}
        </Typography>
      </Paper>
      <Button variant="outlined" component={Link} to="/">
        Back
      </Button>
    </>
  );
};

export default Student;
