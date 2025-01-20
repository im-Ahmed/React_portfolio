import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        1000,
        "PHP Developer",
        1000,
        "Student",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2rem", display: "inline-block", color: "#0d6efd" }}
      repeat={Infinity}
    />
  );
};
export default ExampleComponent;
