import React from 'react';
import PropTypes from 'prop-types';

import './LeftPanel.css';

const LeftPanel = ({ chatHistory }) => (
  <article>
    <section>
      left panel
    </section>
  </article>
);

LeftPanel.propTypes = {
  chatHistory: PropTypes.array.isRequired,
};

export default LeftPanel;
