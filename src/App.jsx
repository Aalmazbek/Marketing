import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OfflineSEOAnalyse from './components/OfflineSEOAnalyse/OfflineSEOAnalyse';
import { changeScheme } from './redux';




function App() {
  // const darkScheme = useSelector(state => state.general.darkScheme)
  const dispatch = useDispatch()

  window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    dispatch(changeScheme(e.matches))
  })


  return (
    <div className="App">
      <Header />

      <OfflineSEOAnalyse />
      <Footer />
    </div>
  );
}

export default App;
