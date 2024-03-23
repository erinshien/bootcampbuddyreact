import 'react'
import PropTypes from 'prop-types';
import './Message.css'

const Message = ({ selectedMessage }) => {
  return <p id="buddy-message">{selectedMessage}</p>;
}

Message.propTypes = {
  selectedMessage: PropTypes.string.isRequired,
};

export default Message;