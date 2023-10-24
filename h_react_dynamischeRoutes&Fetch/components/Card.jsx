import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>;
    </div>
  );
};

export default Card;
<h1>{}</h1>;

Card.propTypes = {
  name: PropTypes.string,
};
