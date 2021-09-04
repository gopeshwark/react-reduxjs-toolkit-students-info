import { Button, Paper, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  clearStudent,
  editStudent,
  findStudent,
} from "../redux/actions/studentAction";

const EditStudent = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  });
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findStudent(params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, [params.id]);

  const studentData = useSelector((state) => state.student.student);

  useEffect(() => {
    reset(studentData);
  }, [reset, studentData]);

  const onSubmit = (data) => {
    dispatch(editStudent(data));
    history.push("/");
  };

  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-Mail"
                variant="outlined"
                placeholder="Enter Your E-Mail Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Enter Your Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Button type="submit">Update Student</Button>
        </form>
      </Paper>
      <Button variant="outlined" component={Link} to="/">
        Back
      </Button>
    </div>
  );
};

export default EditStudent;
