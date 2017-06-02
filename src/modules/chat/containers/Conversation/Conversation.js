import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ConversationLayout from '../../components/ConversationLayout/ConversationLayout';

import { getMessages } from '../../data/selectors';
import { sendMessageRequest } from '../../data/actions';

const mapStateToProps = state => ({
  messages: getMessages(state),
});

const mapDispatchToProps = {
  sendMessage: sendMessageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationLayout);
