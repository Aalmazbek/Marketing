import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";



let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const darkSchemeSlice = createSlice({
  name: 'darkScheme',
  initialState: {
    value: isDark
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {changeValue} = darkSchemeSlice.actions





export const store = configureStore({
  reducer: {
    darkScheme: darkSchemeSlice.reducer
  }
})


