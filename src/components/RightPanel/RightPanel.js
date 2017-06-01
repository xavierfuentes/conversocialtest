import React from 'react';
import PropTypes from 'prop-types';

import './RightPanel.css';

const RightPanel = ({ chat }) => (
  <article>
    <section>
      right panel
    </section>
  </article>
);

RightPanel.propTypes = {
  chat: PropTypes.shape({}).isRequired,
};

export default RightPanel;
