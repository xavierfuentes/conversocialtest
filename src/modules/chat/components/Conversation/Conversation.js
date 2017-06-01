import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Conversation.css';

import { getMessages } from '../../data/selectors';
import MessagesList from '../MessagesList/MessagesList';

const Conversation = ({ messages }) => (
  <article className='Conversation'>
    <section className='Conversation-messages-wrapper'>
      <MessagesList messages={messages} />
    </section>

    <section className='Conversation-input-wrapper'>
      <textarea></textarea>
    </section>
  </article>
);

const mapStateToProps = (state) => ({
  messages: getMessages(state),
});

const mapDispatchToProps = {};

Conversation.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
