import PropTypes from "prop-types";

const Avatar = ({ name }) => {
  const seed = Math.random().toString(36).substring(7);
  const avatar = `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}`;

  return <img src={`${avatar}`} alt={`${name}'s profile`} className="h-6  w-6 rounded-lg md:mr-1 md:h-8 md:w-8" />;
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;
