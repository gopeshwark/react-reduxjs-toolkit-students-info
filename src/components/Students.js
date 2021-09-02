import { Fab, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import StudentItem from "./StudentItem";
import { studentData } from "../data";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Students = () => {
  const styles = useStyles();

  return (
    <>
      <Grid spacing={2} container>
        {studentData.map((data) => (
          <StudentItem key={data.id} {...data} />
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
