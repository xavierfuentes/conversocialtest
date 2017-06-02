import React from 'react';
import PropTypes from 'prop-types';

import './Message.css';

const Message = ({ message }) => (
  <article className={message.author.id === 0 ? 'Message Message-local' : 'Message Message-user'}>
    <section>
      <span>Sent on: {message.sentAt.toString()}</span>
    </section>

    <section>
      <span>{message.text}</span>
    </section>
  </article>
);

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
    id: PropTypes.string.isRequired,
    sentAt: PropTypes.instanceOf(Date),
    text: PropTypes.string.isRequired,
  }),
};

export default Message;
