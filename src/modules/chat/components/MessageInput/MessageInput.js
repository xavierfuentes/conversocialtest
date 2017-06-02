import React from 'react';
import PropTypes from 'prop-types';

import './MessageInput.css';

const MessageInput = ({ onMessageSent, value = undefined }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      onMessageSent(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <article className="MessageInput">
      <textarea onKeyDown={handleKeyDown} />
    </article>
  );
};

MessageInput.propTypes = {
  onMessageSent: PropTypes.func.isRequired,
};

export default MessageInput;
