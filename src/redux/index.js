import { configureStore, createSlice } from "@reduxjs/toolkit";



// let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    darkScheme: JSON.parse(localStorage.getItem('darkScheme')) || false,
    lang: JSON.parse(localStorage.getItem('lang')) || 'en',
    caseStudiesDetails: JSON.parse(localStorage.getItem('case-studies-details')) || ''
  },
  reducers: {
    changeScheme: (state, action) => {
      state.darkScheme = !state.darkScheme
    },
    changeLang: (state, action) => {
      state.lang = action.payload
    },
    setCaseStudiesDetails: (state, action) => {
      state.caseStudiesDetails = action.payload
    }
  }
})

export const {changeScheme, changeLang, setCaseStudiesDetails} = generalSlice.actions





export const store = configureStore({
  reducer: {
    general: generalSlice.reducer
  }
})


store.subscribe(() => {
  const state = store.getState()

  localStorage.setItem('darkScheme', JSON.stringify(state.general.darkScheme))
  localStorage.setItem('lang', JSON.stringify(state.general.lang))
  localStorage.setItem('case-studies-details', JSON.stringify(state.general.caseStudiesDetails))
})