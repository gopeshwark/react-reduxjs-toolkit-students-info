import React, { useEffect } from "react";
import { Button, Paper, Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStudent, fetchStudentById } from "../redux/actions/studentAction";

const Student = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentById(params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, [params.id]);

  const student = useSelector((state) => state.student.student);
  const { _id, firstName, lastName, phone, email, address } = student;
  return (
    <>
      <Paper key={_id}>
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
