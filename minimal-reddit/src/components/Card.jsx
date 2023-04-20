import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className={`mb-9 rounded-lg bg-slate-100 p-6 transition delay-0 duration-100 ease-in hover:shadow-lg`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Card;
