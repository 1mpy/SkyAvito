import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  email: null,
  city: null,
  avatar: null,
  sells_from: null,
  phone: null,
  role: null,
  surname: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("action.payload", action.payload);
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.city = action.payload.city;
      state.avatar = action.payload.avatar;
      state.sells_from = action.payload.sells_from;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
      state.surname = action.payload.surname;
    },
    removeUser(state) {
      state = initialState;
    },
    changeEmail(state, action) {
      state.email = action.payload.email;
    },
    changePassword(state, action) {
      state.password = action.payload.password;
    },
  },
});

export const { setUser, removeUser, changeEmail, changePassword } =
  userSlice.actions;
export default userSlice.reducer;
