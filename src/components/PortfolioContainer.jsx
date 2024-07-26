import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Project from '../components/pages/Project';
import Contact from '../components/pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home')

const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <footer className="">
        <Footer />
      </footer>

    </div>
  );
}