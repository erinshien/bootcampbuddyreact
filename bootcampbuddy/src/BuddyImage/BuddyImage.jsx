import 'react'
// Installed and imported PropTypes to fix eslint issue
import PropTypes from 'prop-types';
import './BuddyImage.css'


const BuddyImage = ({ selectedBuddy }) => {
  return <img id="selected-buddy" src={selectedBuddy.image}></img>;
};

// Prop type validation - specifies `imageSource` is required and should be a string
BuddyImage.propTypes = {
  selectedBuddy: PropTypes.object.isRequired,
};

export default BuddyImage;