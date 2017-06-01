import React, { Component } from 'react';

import './App.css';

import { HEADER_TITLE } from '../../data/constants';

import TopBar from '../TopBar/TopBar';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

class App extends Component {
  render() {
    return (
      <article className='App'>
        <TopBar title={HEADER_TITLE} />
          <section className='App-content'>
            <LeftPanel chatHistory={[]} />
            <RightPanel chat={{}} />
          </section>
      </article>
    );
  }
}

export default App;
