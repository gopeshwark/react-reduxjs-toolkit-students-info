import { createReducer } from "@reduxjs/toolkit";
import {
  findStudent,
  clearStudent,
  createStudent,
  editStudent,
  deleteStudent,
} from "../actions/studentAction";

const initialState = {
  students: [
    {
      id: 1,
      firstName: "James",
      lastName: "Bond",
      email: "james_bond1324@hotmail.com",
      phone: "+91-620-320-4125",
      address: "Movies street",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      email: "doejohn@yahoo.co.in",
      phone: "+91-953-928-4930",
      address: "312 Downtown Street",
    },
    {
      id: 3,
      firstName: "Amrendra",
      lastName: "Bahubali",
      email: "mahishmati_samrajya@gmail.com",
      phone: "+91-917-1416065",
      address: "Mahishmati Samrajya",
    },
    {
      id: 4,
      firstName: "Rocky",
      lastName: "Since 1951",
      email: "rocky_kgf@hotmail.com",
      phone: "+91-644-6939697",
      address: "Akha Mumbai",
    },
  ],
  student: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  },
};

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(findStudent, (state, action) => {
      state.student = state.students.find(
        (student) => student.id == action.payload
      );
    })
    .addCase(clearStudent, (state) => {
      state.student = {};
    })
    .addCase(createStudent, (state, action) => {
      state.students = [action.payload, ...state.students];
    })
    .addCase(editStudent, (state, action) => {
      state.students = state.students.map((student) =>
        student.id == action.payload.id ? action.payload : student
      );
    })
    .addCase(deleteStudent, (state, action) => {
      state.students = state.students.filter(
        (student) => student.id != action.payload
      );
    });
});

export default studentReducer;
