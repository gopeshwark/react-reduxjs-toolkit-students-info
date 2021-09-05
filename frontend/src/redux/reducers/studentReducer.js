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
  loading: false,
  error: false,
};

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAllStudents.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
      state.loading = false;
    })
    .addCase(fetchAllStudents.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(createNewStudent.pending, (state) => {
      state.loading = true;
    })
    .addCase(createNewStudent.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(createNewStudent.fulfilled, (state, action) => {
      state.students = [action.payload, ...state.students];
      state.loading = false;
    })
    .addCase(fetchStudentById.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchStudentById.fulfilled, (state, action) => {
      state.student = action.payload;
      state.loading = false;
    })
    .addCase(fetchStudentById.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(clearStudent, (state) => {
      state.student = {};
    })
    .addCase(updateStudentById.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateStudentById.fulfilled, (state, action) => {
      state.students = state.students.map((student) =>
        student._id == action.payload._id ? action.payload : student
      );
    })
    .addCase(deleteStudentById.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteStudentById.fulfilled, (state, action) => {
      state.students = state.students.filter(
        (student) => student._id != action.payload
      );
      state.loading = false;
    })
    .addCase(deleteStudentById.rejected, (state) => {
      state.loading = false;
    });
});

export default studentReducer;
