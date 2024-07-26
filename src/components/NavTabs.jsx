function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs bg-dark" data-bs-theme="dark">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
  
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link text-white'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
  
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-white'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => handlePageChange('Project')}
  
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link text-white'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
  
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-white'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;