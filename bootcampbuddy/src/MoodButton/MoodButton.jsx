import 'react'
import PropTypes from 'prop-types';
import './MoodButton.css'

export default function MoodButton(props) {
  return (
    <button style={{ background: props.color }}>
      <img src={props.image}></img>
      {props.text}
    </button>
  )
}

MoodButton.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

