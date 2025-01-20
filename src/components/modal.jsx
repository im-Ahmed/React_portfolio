import React from "react";
import "./modal.css";
import Footer from "./Footer";
import { FaArrowLeft } from "react-icons/fa6";
const Modal = ({ show, onClose, title, img, des, category, client, date }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <header>
            <button onClick={onClose}>
              <FaArrowLeft />
            </button>
            <h1>Details</h1>
          </header>
          <main className="main">
            <div className="image">
              <img src={img} alt="" />
            </div>

            <article>
              <div className="project-info">
                <div className="heading">
                  <h3>Project Information</h3>
                  <hr />
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <strong>Category:</strong> {category}
                    </li>
                    <li>
                      <strong>Client:</strong> {client}
                    </li>
                    <li>
                      <strong>Project date:</strong> {date}
                    </li>
                  </ul>
                </div>
              </div>
              <h3>{title}</h3>
              <p>{des}</p>
            </article>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Modal;
