import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <nav
        style={{ position: "fixed", minWidth: "100%" }}
        className="navbar navbar-expand-lg bg-nav"
      >
        <div className="container-fluid">
          <Link className="logo" to="hero">
            Logo
          </Link>
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
            className="collapse navbar-collapse items"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  smooth={true}
                  duration={100}
                  to="home"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={100}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={100}
                  to="skill"
                >
                  skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={100}
                  to="project"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={100}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
