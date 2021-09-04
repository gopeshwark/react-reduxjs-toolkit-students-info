import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk(
  "student/fetchAllStudents",
  async (student, thunkApi) => {
    if (thunkApi.getState().student.students.length > 0) {
      return thunkApi.getState().student.students;
    }
    const { data } = await axios.get("/students");
    return data;
  }
);

export const createNewStudent = createAsyncThunk(
  "student/createNewStudent",
  async (student) => {
    const { data } = await axios.post("/students", student);
    return data;
  }
);

export const fetchStudentById = createAsyncThunk(
  "student/fetchStudentById",
  async (studentId) => {
    const { data } = await axios.get(`/students/${studentId}`);
    return data;
  }
);

export const updateStudentById = createAsyncThunk(
  "student/updateStudentById",
  async (student) => {
    const { _id, ...rest } = student;
    const { data } = await axios.put(`/students/${_id}`, rest);
    return data;
  }
);

export const deleteStudentById = createAsyncThunk(
  "student/deleteStudentById",
  async (studentId) => {
    await axios.delete(`/students/${studentId}`);
    return studentId;
  }
);

export const clearStudent = createAction("student/clear");
