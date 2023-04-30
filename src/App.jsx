import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { changeValue } from './redux';




function App() {
  const darkScheme = useSelector(state => state.darkScheme.value)
  const dispatch = useDispatch()

  window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    console.log(e.matches);
    dispatch(changeValue(e.matches))
  })


  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
