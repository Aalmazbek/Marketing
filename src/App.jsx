import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import GetFreeSEOAnalysis from './components/GetFreeSEOAnalysis/GetFreeSEOAnalysis';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogDetailsPage from './pages/BlogDetailsPage/BlogDetailsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import CaseStudiesDetailsPage from './pages/CaseStudiesDetailsPage/CaseStudiesDetailsPage';
import CaseStudiesPage from './pages/CaseStudiesPage/CaseStudiesPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
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

      <main>
        <Routes>
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/case-studies-list' element={<CaseStudiesPage />} />
          <Route path='/case-studies-details' element={<CaseStudiesDetailsPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog-details' element={<BlogDetailsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

        <GetFreeSEOAnalysis />
      </main>

      <Footer />
    </div>
  );
}

export default App;
