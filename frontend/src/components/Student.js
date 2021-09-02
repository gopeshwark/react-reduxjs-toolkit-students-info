import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { studentData } from "../data";

const Student = () => {
  const params = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    const currentStudent = studentData.find(
      (student) => student.id == params.id
    );

    setStudent(currentStudent);
  }, [params]);
  console.log(student);
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
