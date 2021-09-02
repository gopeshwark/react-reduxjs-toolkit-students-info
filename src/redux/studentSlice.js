import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
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
      {
        id: 5,
        firstName: "Robin",
        lastName: "Hood",
        email: "robin_hood@hotmail.com",
        phone: "+91-704-4124157",
        address: "Rakshak Gali No. 1",
      },
      {
        id: 6,
        firstName: "Peter",
        lastName: "parkar",
        email: "parkar_peter17@gmail.com",
        phone: "+91-947-960-7538",
        address: "Spider Man Street",
      },
      {
        id: 7,
        firstName: "Thor",
        lastName: "Son of Oden",
        email: "tasaract_hammer@yahoo.co.in",
        phone: "+91-918-7520232",
        address: "Asgard Near 9 Relhm",
      },
      {
        id: 8,
        firstName: "Captain",
        lastName: "America",
        email: "era1970@hotmail.com",
        phone: "+91-933-023-6755",
        address: "From Past to Present",
      },
      {
        id: 9,
        firstName: "Tony",
        lastName: "Stark",
        email: "iron_manalive@gmail.com",
        phone: "+91-732-9504322",
        address: "Stark Industies Tower",
      },
      {
        id: 10,
        firstName: "Hulk",
        lastName: "Green",
        email: "thebigguy@yahoo.co.in",
        phone: "+91-834-5715321",
        address: "77860 Laboratory Road",
      },
    ],
    student: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  },
  reducers: {
    getStudent: (state, action) => {
      state.student = state.students.find((item) => item.id == action.payload);
    },
    clearStudent: (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    },
    addStudent: (state, action) => {
      state.students = [action.payload, ...state.students];
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((item) =>
        item.id == action.payload.id ? action.payload : item
      );
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export const {
  getStudent,
  clearStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
