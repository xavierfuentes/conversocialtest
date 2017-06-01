import React from 'react';
import PropTypes from 'prop-types';

import './RightPanel.css';

const RightPanel = ({ chat }) => (
  <article className='RightPanel'>
    <section>
      right panel
    </section>
  </article>
);

RightPanel.propTypes = {
  chat: PropTypes.shape({}).isRequired,
};

export default RightPanel;
