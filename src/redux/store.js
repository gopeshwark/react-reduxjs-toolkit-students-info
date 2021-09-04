import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./reducers/studentReducer";

const preloadedState = {
  student: {
    ids: [1, 2, 3, 4],
    entities: {
      1: {
        id: 1,
        firstName: "James",
        lastName: "Bond",
        email: "james_bond1324@hotmail.com",
        phone: "+91-620-320-4125",
        address: "Movies street",
      },
      2: {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        email: "doejohn@yahoo.co.in",
        phone: "+91-953-928-4930",
        address: "312 Downtown Street",
      },
      3: {
        id: 3,
        firstName: "Amrendra",
        lastName: "Bahubali",
        email: "mahishmati_samrajya@gmail.com",
        phone: "+91-917-1416065",
        address: "Mahishmati Samrajya",
      },
      4: {
        id: 4,
        firstName: "Rocky",
        lastName: "Since 1951",
        email: "rocky_kgf@hotmail.com",
        phone: "+91-644-6939697",
        address: "Akha Mumbai",
      },
    },
  },
};

export const store = configureStore({
  reducer: {
    student: studentReducer,
  },
  preloadedState,
});
