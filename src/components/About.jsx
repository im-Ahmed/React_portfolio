import { Element } from "react-scroll";

const About = () => {
  return (
    <>
      <Element name="about">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2 className="about-heading">About me</h2>
            </div>

            <div className="row">
              <center
                className="col-lg-4 aos-init aos-animate"
                data-aos="fade-right"
              >
                <img
                  style={{
                    backgroundColor: "rgba(255,255,255,.3)",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
                  }}
                  src="/profile_pic.png"
                  className="img-fluid my-image"
                  alt=""
                />
              </center>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate"
                data-aos="fade-left"
              >
                <h3>Web Designer &amp; Developer.</h3>
                <p className="fst-italic">
                  I am a <strong>Software Engineering</strong> student at the
                  University of Agriculture, Faisalabad, specializing in web
                  development. I am passionate about building{" "}
                  <strong>responsive</strong> and <strong>user-friendly</strong>{" "}
                  websites and applications.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Email:</strong>{" "}
                        <span>www.ahmedfaooqim3.com</span>
                      </li>
                      <br />
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>City:</strong> <span>Faisalabad, Pakistan</span>
                      </li>
                      <br />
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Age: </strong>
                        <span>20 years</span>
                      </li>
                      <br />
                      {/* <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Degree:</strong>{" "}
                        <span>Bachelor of Software Engineering</span>
                      </li>
                      <br /> */}
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Experiance:</strong> <span>2 years</span>
                      </li>
                      <br />
                    </ul>
                  </div>
                </div>
                <p>
                  Throughout my academic journey, I have honed my skills in
                  various web technologies, including{" "}
                  <strong>
                    {" "}
                    HTML5, CSS3, JS, Bootstrap, tailwind, React js & Redux{" "}
                  </strong>
                  . Also be a part of NN software House for 1 year as a{" "}
                  <strong>junior Developer</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};
export default About;
