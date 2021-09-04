import { Fab, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import StudentItem from "./StudentItem";
import { useSelector } from "react-redux";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { studentSelector } from "../redux/reducers/studentReducer";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Students = () => {
  const styles = useStyles();
  const studentData = useSelector((state) => studentSelector.selectAll(state));

  return (
    <>
      <Grid spacing={2} container>
        {studentData.map((student) => (
          <StudentItem key={student.id} {...student} />
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
