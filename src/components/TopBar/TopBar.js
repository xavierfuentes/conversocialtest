import React from 'react';
import PropTypes from 'prop-types';

import './TopBar.css';

import { HEADER_TITLE, HEADER_BUTTON_ADD_CHAT } from '../../data/constants';

const TopBar = () => (
  <article className='TopBar'>
    <section>
      <header>
        <h1 className='TopBar-title'>{HEADER_TITLE}</h1>
      </header>
    </section>
    <section>
      <button className='TopBar-cta'>{HEADER_BUTTON_ADD_CHAT}</button>
    </section>
  </article>
);

export default TopBar;
