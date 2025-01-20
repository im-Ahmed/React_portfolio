import { useState } from "react";
import Modal from "./modal";
const ProjectCard = ({ img, title, des, wide, category, client, date }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {wide ? (
        <div className={`col-lg-6  col-sm-12 col-12`}>
          <div className="project-card">
            <img src={img} alt="" />
            <div className="project-shadow">
              <h4>{title}</h4>
              <button onClick={toggleModal}>
                {showModal ? "Hide details" : "Details"}
              </button>
              <Modal
                show={showModal}
                onClose={toggleModal}
                title={title}
                img={img}
                des={des}
                category={category}
                client={client}
                date={date}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={`col-lg-4 col-sm-12 col-12`}>
          <div className="project-card">
            <img src={img} alt="" />
            <div className="project-shadow">
              <h4>{title}</h4>
              <button onClick={toggleModal}>
                {showModal ? "Hide details" : "Details"}
              </button>
              <Modal
                show={showModal}
                onClose={toggleModal}
                title={title}
                img={img}
                des={des}
                category={category}
                client={client}
                date={date}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProjectCard;
