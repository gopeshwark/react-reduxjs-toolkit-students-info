import { Fab, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import StudentItem from "./StudentItem";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { fetchAllStudents } from "../redux/actions/studentAction";
import Loader from "./layout/Loader";
import ErrorBox from "./layout/ErrorBox";

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
  const { students, loading, error } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorBox message={error.message} />
      ) : (
        <>
          <Grid spacing={2} container>
            {students.map((student) => (
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
      )}
    </>
  );
};

export default Students;
