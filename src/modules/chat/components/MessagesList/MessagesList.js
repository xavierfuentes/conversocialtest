import React from 'react';
import PropTypes from 'prop-types';

import './MessagesList.css';

import Message from '../Message/Message';

const MessagesList = ({ messages }) => (
  <article className="MessagesList">
    {messages.map(message => (
      <Message message={message} key={message.id} />
    ))}
  </article>
);

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessagesList;
