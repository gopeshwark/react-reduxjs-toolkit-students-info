import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const studentAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});
export const studentSelector = studentAdapter.getSelectors(
  (state) => state.student
);

export const studentSlice = createSlice({
  name: "student",
  initialState: studentAdapter.getInitialState(),
  reducers: {
    addStudent: studentAdapter.addOne,
    updateStudent: studentAdapter.updateOne,
    deleteStudent: studentAdapter.removeOne,
  },
});

export const { addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;
export const studentReducer = studentSlice.reducer;
