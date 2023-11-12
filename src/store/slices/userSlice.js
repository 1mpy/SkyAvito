import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:null,
  email: null,
  token: null,
  id: null,
  password: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
      state.password = action.payload.password
    },
    removeUser(state) {
      state.name = null
      state.email = null
      state.token = null
      state.id = null
      state.password = null
    },
    changeEmail(state, action) {
      state.email = action.payload.email
    },
    changePassword(state, action) {
      state.password = action.payload.password
    },
  },
})

export const { setUser, removeUser, changeEmail, changePassword } =
  userSlice.actions
export default userSlice.reducer
