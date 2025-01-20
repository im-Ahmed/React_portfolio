import { Element } from "react-scroll";
import ExampleComponent from "./Typing";

const Hero = () => {
  return (
    <Element name="home">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5 hero">
        <div className="row align-items-center g-lg-5 my-3">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="col-lg-10 heading">
              Hi! I'm Ahmed Farooq <br />
              <ExampleComponent />
            </h1>
            <a href="/cv.pdf" className="down-btn" download="AhmedFarooq.pdf">
              Download CV
            </a>
          </div>
          <div className="col-md-9 col-sm-10 mx-auto col-lg-5">
            <form>
              <img
                src="/hero-side-removebg-preview.png"
                className="card-img-top hero-img"
                alt="..."
              />
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Hero;
