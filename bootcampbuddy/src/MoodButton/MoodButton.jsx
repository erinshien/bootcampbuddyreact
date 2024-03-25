import 'react'
import PropTypes from 'prop-types';
import './MoodButton.css'

export default function MoodButton(props) {
  return (
    <>
    <button style={{ background: props.color }} className="mood-button">
      <img src={props.image}></img>
    </button>
    </>
  )
}

MoodButton.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

