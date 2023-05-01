import { configureStore, createSlice } from "@reduxjs/toolkit";



let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    darkScheme: isDark,
    lang: JSON.parse(localStorage.getItem('lang')) || 'en'
  },
  reducers: {
    changeScheme: (state, action) => {
      state.darkScheme = action.payload
    },
    changeLang: (state, action) => {
      state.lang = action.payload
    }
  }
})

export const {changeScheme, changeLang} = generalSlice.actions





export const store = configureStore({
  reducer: {
    general: generalSlice.reducer
  }
})


store.subscribe(() => {
  const state = store.getState()

  localStorage.setItem('lang', JSON.stringify(state.general.lang))
})