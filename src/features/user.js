import { createSlice } from '@reduxjs/toolkit';
const initialValues = { name: '', email: '' };
export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialValues },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialValues;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
