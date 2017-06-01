import React from 'react';
import PropTypes from 'prop-types';

import './TopBar.css';

import { HEADER_BUTTON_ADD_CHAT } from '../../data/constants';

const TopBar = ({ title }) => (
  <article>
    <section>
      <header>
        <h1>{title}</h1>
      </header>
    </section>
    <section>
      <button>{HEADER_BUTTON_ADD_CHAT}</button>
    </section>
  </article>
);

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopBar;
