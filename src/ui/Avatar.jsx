import PropTypes from "prop-types";

function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 rounded-full object-cover"
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
