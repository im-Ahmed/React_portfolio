import { Element } from "react-scroll";
import ProjectCard from "./project-card";

const Projects = () => {
  const card_details = [
    {
      key: 0,
      img: "/inventory.png",
      title: "IMS",
      des: "Inventory Management System (IMS) manage all sales & purchase and daily product in & out traffic directly from server phpMyAdmin using PHP designed using bootstrap ",
      category: "Complete website",
      client: "USA client",
      date: "11 september 2023",
      wide: false,
    },
    {
      key: 1,
      img: "/calculator.png",
      title: "Calculator",
      des: "One of my beginning Project made in Html, CSS & JS. As this is basic level calculator so it can only perform Arithmatic operations",
      category: "App",
      client: "Own project",
      date: "8 July 2024",
      wide: false,
    },
    {
      key: 2,
      img: "/wordpress.png",
      title: "Restuarently",
      des: "Food website designed by Elementor in wordpress. Fully customizable according to the requirments ",
      category: "Website design",
      client: "Own project",
      date: "20 May 2024",
      wide: false,
    },
    {
      key: 3,
      img: "/media.png",
      title: "Social Media App",
      des: "Simple app that fetch posts from a dummy server and display a feed also create custom posts in React js",
      category: "App",
      client: "Own project",
      date: "28 Augest 2024",
      wide: true,
    },
    {
      key: 4,
      img: "/wordpress.png",
      title: "Restuarently",
      des: "Food website designed by Elementor in wordpress. Fully customizable according to the requirments ",
      category: "Website design",
      client: "Own project",
      date: "20 May 2024",
      wide: true,
    },
  ];
  return (
    <Element name="project" id="skills" className="projects">
      <div className="container">
        <div className="section-title">
          <h2 className="skill-heading">Projects</h2>
        </div>
        <div className="project-container">
          <center className="row">
            {card_details.map((item) => (
              <ProjectCard
                key={item.key}
                img={item.img}
                title={item.title}
                des={item.des}
                wide={item.wide}
                category={item.category}
                client={item.client}
                date={item.date}
              />
            ))}
          </center>
        </div>
      </div>
    </Element>
  );
};
export default Projects;
