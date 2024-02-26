import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function NavbarMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand navbar-logo mx-5" href="/">
            <img
              src="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/logo.png?token=GHSAT0AAAAAACLORNQYV3FH6MRQ6GAKH6F6ZN6KEFA"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="home" className="nav-link nav-link-ltr">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="whoweare" className="nav-link nav-link-ltr">
                  Who we are
                </Link>
              </li>
              <li className="nav-item">
                <Link to="whatwedo" className="nav-link nav-link-ltr">
                  What we do
                </Link>
              </li>
              <li className="nav-item">
                <Link to="whychooseus" className="nav-link nav-link-ltr">
                  Why to choose
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link nav-link-ltr">
                
                  Connect with us
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="/ourwork" className="nav-link nav-link-ltr">
                  Our Work
                </NavLink>
              </li>
            </ul>
            <form className="d-flex social "> 
              <li className="nav-item">
                <NavLink to="https://twitter.com/?lang=en">
                  <i className="fa-brands fa-twitter"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-f"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram"></i>
                </NavLink>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarMenu;
