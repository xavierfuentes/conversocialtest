import React from 'react';
import PropTypes from 'prop-types';

import './TopBar.css';

import { HEADER_BUTTON_ADD_CHAT } from '../../data/constants';

const TopBar = ({ title }) => (
  <article className='TopBar'>
    <section>
      <header>
        <h1 className='TopBar-title'>{title}</h1>
      </header>
    </section>
    <section>
      <button className='TopBar-cta'>{HEADER_BUTTON_ADD_CHAT}</button>
    </section>
  </article>
);

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopBar;
