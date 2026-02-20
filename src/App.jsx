import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import OurServices from './components/OurServices';
import CovidHomeTest from './components/CovidHomeTest';
import CovidWorkplaceTesting from './components/CovidWorkplaceTesting';
import BecomeACourier from './components/BecomeACourier';
import ContactUs from './components/ContactUs';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');

  const goContact = () => setPage('contact');

  return (
    <div className="app-wrap">
      <div className="content-block">
        <Header activePage={page} onNavigate={setPage} />
        {page === 'our-services' && <OurServices onContactClick={goContact} />}
        {page === 'covid-home' && <CovidHomeTest onContactClick={goContact} />}
        {page === 'covid-workplace' && <CovidWorkplaceTesting onContactClick={goContact} />}
        {page === 'become-courier' && <BecomeACourier onWorkWithUs={goContact} />}
        {page === 'contact' && <ContactUs />}
        {page === 'home' && (
          <>
            <Hero />
            <ContentSection />
          </>
        )}
      </div>
    </div>
  );
}
