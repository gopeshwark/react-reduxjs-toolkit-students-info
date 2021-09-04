import { Fab, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import StudentItem from "./StudentItem";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { fetchAllStudents } from "../redux/actions/studentAction";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Students = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.student.students);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, []);

  return (
    <>
      <Grid spacing={2} container>
        {studentData.map((student) => (
          <StudentItem key={student._id} {...student} />
        ))}
      </Grid>
      <Fab
        component={Link}
        to="/students/create"
        color="primary"
        className={styles.fab}
      >
        <Add />
      </Fab>
    </>
  );
};

export default Students;
