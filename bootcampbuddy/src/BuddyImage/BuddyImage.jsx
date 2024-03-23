import 'react'
// Installed and imported PropTypes to fix eslint issue
import PropTypes from 'prop-types';
import './BuddyImage.css'


const BuddyImage = ({ imageSource }) => {
  return <img id="selected-buddy" src={imageSource}></img>;
};

// Prop type validation - specifies `imageSource` is required and should be a string
BuddyImage.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

export default BuddyImage;