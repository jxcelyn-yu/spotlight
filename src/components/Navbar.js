import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navImage from "./images/spotify.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Pass the search term to the parent component
    // You can define a function in the parent component to handle the search
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-image">
            <img src={navImage} alt="Nav Image" className="navbar-image" />
          </div>
          <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
            SPOTLIGHT
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/artists"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Artists
              </Link>
            </li>

            <li className="nav-item">
              <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  data-testid="search-input"
                  data-encore-id="text"
                  value={searchTerm}
                  style={{ color: "rgb(0, 0, 0)" }}
                  onChange={handleSearchChange}
                />
                {/* <button type="submit">Submit</button> Add submit button */}
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
