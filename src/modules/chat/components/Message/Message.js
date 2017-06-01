import React from 'react';
import PropTypes from 'prop-types';

import './Message.css';

const Message = ({ text, author }) => (
  <article className={author.id === 0 ? 'Message Message-local' : 'Message Message-user'}>
    <span>{text}</span>
  </article>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default Message;
