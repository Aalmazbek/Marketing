import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import GetFreeSEOAnalysis from './components/GetFreeSEOAnalysis/GetFreeSEOAnalysis';
import Header from './components/Header/Header';
import Testimonials from './components/Testimonials/Testimonials';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogDetailsPage from './pages/BlogDetailsPage/BlogDetailsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import CaseStudiesDetailsPage from './pages/CaseStudiesDetailsPage/CaseStudiesDetailsPage';
import CaseStudiesPage from './pages/CaseStudiesPage/CaseStudiesPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {
  const darkScheme = useSelector(state => state.general.darkScheme)

  


  return (
    <div className={`App ${darkScheme ? 'App-dark' : ''}`}>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/case-studies/list' element={<CaseStudiesPage />} />
          <Route path='/case-studies/list/details' element={<CaseStudiesDetailsPage />} />
          <Route path='/blog/list' element={<BlogPage />} />
          <Route path='/blog/details/:id' element={<BlogDetailsPage />} />
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
