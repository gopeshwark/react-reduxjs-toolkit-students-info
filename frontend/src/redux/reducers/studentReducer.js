import { createReducer } from "@reduxjs/toolkit";
import {
  clearStudent,
  deleteStudentById,
  fetchAllStudents,
  createNewStudent,
  fetchStudentById,
  updateStudentById,
} from "../actions/studentAction";

const initialState = {
  students: [],
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
    .addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    })
    .addCase(createNewStudent.fulfilled, (state, action) => {
      state.students = [action.payload, ...state.students];
    })
    .addCase(fetchStudentById.fulfilled, (state, action) => {
      state.student = action.payload;
    })

    .addCase(clearStudent, (state) => {
      state.student = {};
    })
    .addCase(updateStudentById.fulfilled, (state, action) => {
      state.students = state.students.map((student) =>
        student._id == action.payload._id ? action.payload : student
      );
    })
    .addCase(deleteStudentById.fulfilled, (state, action) => {
      state.students = state.students.filter(
        (student) => student._id != action.payload
      );
    });
});

export default studentReducer;
