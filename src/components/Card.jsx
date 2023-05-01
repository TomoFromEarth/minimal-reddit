import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div
      className={`mb-4 rounded-lg bg-slate-100 p-2 shadow-slate-200 hover:shadow-lg dark:bg-slate-800 md:mb-9 md:p-6`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Card;
