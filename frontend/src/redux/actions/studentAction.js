import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk(
  "student/fetchAllStudents",
  async (student, thunkApi) => {
    try {
      if (thunkApi.getState().student.students.length > 0) {
        return thunkApi.getState().student.students;
      }
      const { data } = await axios.get("/students");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const createNewStudent = createAsyncThunk(
  "student/createNewStudent",
  async (student, thunkApi) => {
    try {
      const { data } = await axios.post("/students", student);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
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
  async (studentId, thunkApi) => {
    try {
      await axios.delete(`/students/${studentId}`);
      return studentId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const clearStudent = createAction("student/clear");
