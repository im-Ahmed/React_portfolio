import { Element } from "react-scroll";
import Card from "./skill-card";

const Skills = () => {
  const card_details = [
    {
      key: 0,
      img: "/html-css.png",
      per: "95",
    },
    {
      key: 1,
      img: "/javascript.png",
      per: "80",
    },
    {
      key: 2,
      img: "/tailwind_bootstrap.png",
      per: "85",
    },
    {
      key: 3,
      img: "/elementor.png",
      per: "90",
    },
    {
      key: 4,
      img: "/react_redux.png",
      per: "80",
    },
    {
      key: 5,
      img: "/php.png",
      per: "75",
    },
    {
      key: 6,
      img: "/phpMyAdmin.png",
      per: "90",
    },
  ];
  return (
    <Element name="skill" id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2 className="skill-heading">Skills & Tools</h2>
        </div>
        <div className="container text-center">
          <div className="row">
            {card_details.map((item) => (
              <Card
                key={item.key}
                refer={item.key}
                img={item.img}
                per={item.per}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Skills;
