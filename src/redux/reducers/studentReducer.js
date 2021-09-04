import { createReducer, createEntityAdapter } from "@reduxjs/toolkit";
import {
  createStudent,
  editStudent,
  deleteStudent,
} from "../actions/studentAction";

const studentAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});
export const studentSelector = studentAdapter.getSelectors(
  (state) => state.student
);

const initialState = studentAdapter.getInitialState();

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createStudent, studentAdapter.addOne)
    .addCase(editStudent, studentAdapter.updateOne)
    .addCase(deleteStudent, studentAdapter.removeOne);
});

export default studentReducer;
