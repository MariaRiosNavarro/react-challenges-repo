import PropTypes from "prop-types";

const Item = (props) => {
  return (
    <>
      <h1>Item</h1>
      <p>{props.description}</p>
    </>
  );
};

export default Item;

Item.propTypes = {
  description: PropTypes.string,
};
