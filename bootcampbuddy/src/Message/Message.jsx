import 'react'
import PropTypes from 'prop-types';
import './Message.css'

const Message = ({ selectedBuddy }) => {
  return <p id="buddy-message">{selectedBuddy.message}</p>;
}

Message.propTypes = {
  selectedBuddy: PropTypes.object.isRequired,
};

export default Message;