import PropTypes from "prop-types";

const Avatar = ({ name }) => {
  const seed = Math.random().toString(36).substring(7);
  const avatar = `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}`;

  return <img src={`${avatar}`} alt={`${name}'s profile`} className="mr-1 h-8 w-8 rounded-lg" />;
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;
