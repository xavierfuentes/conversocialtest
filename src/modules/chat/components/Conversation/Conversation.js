import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Conversation.css';

import { getMessages } from '../../data/selectors';
import MessagesList from '../MessagesList/MessagesList';

import { sendMessageRequest } from '../../data/actions';
import MessageInput from '../MessageInput/MessageInput';

const Conversation = ({ messages, sendMessage }) => {
  const addMessage = messageText => {
    sendMessage(messageText);
  };

  return (
    <article className="Conversation">
      <section className="Conversation-messages-wrapper">
        <MessagesList messages={messages} />
      </section>

      <section className="Conversation-input-wrapper">
        <MessageInput onMessageSent={addMessage} />
      </section>
    </article>
  );
};

const mapStateToProps = state => ({
  messages: getMessages(state),
});

const mapDispatchToProps = {
  sendMessage: sendMessageRequest,
};

Conversation.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
