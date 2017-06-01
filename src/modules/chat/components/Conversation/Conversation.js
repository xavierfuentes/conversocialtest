import React from 'react';
import PropTypes from 'prop-types';

import './Conversation.css';

const Conversation = ({ chatHistory }) => (
  <article className='Conversation'>
    <section>
      left panel
    </section>
  </article>
);

Conversation.propTypes = {
  chatHistory: PropTypes.array.isRequired,
};

export default Conversation;
