import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return <div className={`mb-4 rounded bg-slate-50 p-3 ${className}`}>{children}</div>;
};

Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Card;
