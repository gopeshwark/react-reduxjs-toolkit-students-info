import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { addStudent } from "../redux/studentSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AddStudent = () => {
  const { handleSubmit, control, reset, register } = useForm({
    defaultValues: {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addStudent(data));
    reset({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    });
    history.push("/");
  };

  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputProps={{ type: "hidden" }}
            margin="normal"
            {...register("id")}
          />
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
            name="phoneNumber"
            render={({ field }) => (
              <TextField
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Button type="submit">Create New Student</Button>
        </form>
      </Paper>
      <Button variant="outlined" component={Link} to="/">
        Back
      </Button>
    </div>
  );
};

export default AddStudent;
