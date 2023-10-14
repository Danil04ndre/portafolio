import PropTypes from "prop-types";

const Card = ({ el }) => {
  const { image, name, progress } = el;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
      <div>
        <progress id="progress" value={progress} max="100"></progress>
      </div>
    </div>
  );
};
Card.propTypes = {
  el: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
};
export default Card;
