import PropTypes from "prop-types";

const Avatar = ({ name }) => {
  return (
    <img src={`https://api.adorable.io/avatars/10/${name}`} alt={`${name}'s profile`} className="mr-1 h-5 rounded-lg" />
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;
