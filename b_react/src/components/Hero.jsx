/* eslint-disable react/prop-types */
import "./Hero.scss";

// - So können wir auch die Porps abrufen. (dann ohne "props.<name>" unten)
// const Hero = ({ title, descriptionPizza, img,spiegelverkehrt  }) => {

const Hero = (props) => {
  console.log(props);
  return (
    <section
      className={`hero ${props.spiegelverkehrt == "true" ? "reverse-box" : ""}`}
    >
      <img src={props.img} alt="doggo" />
      <article>
        <h2>{props.title}</h2>
        <p>{props.descriptionPizza}</p>
      </article>
    </section>
  );
};

export default Hero;
