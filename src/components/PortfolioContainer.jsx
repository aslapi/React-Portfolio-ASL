import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
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