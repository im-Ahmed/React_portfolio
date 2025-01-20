import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 farooqi</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FaXTwitter />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FaInstagram />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FiFacebook />
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
