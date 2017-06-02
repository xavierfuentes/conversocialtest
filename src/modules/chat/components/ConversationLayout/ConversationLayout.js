import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './ConversationLayout.css';

import MessagesList from '../MessagesList/MessagesList';
import MessageInput from '../MessageInput/MessageInput';

const ConversationLayout = ({ messages, sendMessage }) => {
  const addMessage = messageText => {
    sendMessage(messageText);
  };

  return (
    <article className="ConversationLayout">
      <section className="ConversationLayout-messages-wrapper">
        <MessagesList messages={messages} />
      </section>

      <section className="ConversationLayout-input-wrapper">
        <MessageInput onMessageSent={addMessage} />
      </section>
    </article>
  );
};

ConversationLayout.propTypes = {
  messages: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ConversationLayout;
