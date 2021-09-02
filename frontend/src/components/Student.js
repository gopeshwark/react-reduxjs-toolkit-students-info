import React, { useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudent, clearStudent } from "../redux/studentSlice";

const Student = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, [params.id]);

  const student = useSelector((state) => state.student.student);
  const { id, firstName, lastName, phone, email, address } = student;
  return (
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
  );
};

export default Student;
