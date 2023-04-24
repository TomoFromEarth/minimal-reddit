import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className={`mb-9 rounded-lg bg-slate-100 p-6 hover:shadow-lg dark:bg-slate-800 dark:shadow-slate-200`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Card;
