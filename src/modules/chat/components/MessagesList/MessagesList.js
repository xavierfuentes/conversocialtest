import React from 'react';
import PropTypes from 'prop-types';

import './MessagesList.css';

import Message from '../Message/Message';

const MessagesList = ({ messages }) => (
  <article className="MessagesList">
    {messages.map(({ id, text, author }) => (
      <Message text={text} key={id} author={author}/>
    ))}
  </article>
);

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessagesList;
