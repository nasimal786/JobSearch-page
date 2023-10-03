import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <input type="checkbox" id="check" checked={isMenuOpen} className="check-input" />
      <label htmlFor="check" className="checkbtn" onClick={toggleMenu}>
        <i className="fa-solid fa-bars fa-xl"></i>
      </label>
      <h1 className="logo">Job Search</h1>
      <div className={`header-list ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Jobs</li>
          <li>Search</li>
          <li>Companies</li>
        </ul>
      </div>
      <div className="header-posts">
        <i className="fa-solid fa-briefcase fa-xl"></i>
        <li>Post Jobs</li>
        <i className="fa-solid fa-bell fa-xl"></i>
      </div>
      <button className="login-button">Login/Sign Up</button>
    </div>
  );
}

export default Header;


// <div>
    // <nav>
    //   {/* <input type="checkbox" id="check" /> */}
    //   <input type="checkbox" id="check-box" />
    //   <label for='check' className="check-btn">
    //   <i class="fa-solid fa-bars fa-xl"></i>
    //   </label>
      
    //   <label className="logo">Job Search</label>
    //   <ul>
    //     <li className="active">
    //       <a href="#">Jobs</a>
    //     </li>
    //     <li>
    //       <a href="#">Searchs</a>
    //     </li>
    //     <li>
    //       <a href="#">Companies</a>
    //     </li>
    //   </ul>
    //   <li>
    //     <a href="#">Post Jobs</a>
    //   </li>
    //   <i class="fa-solid fa-briefcase fa-xl"></i>
    //   <button>Login/Sign Up</button>
    // </nav>
    
    // </div>
