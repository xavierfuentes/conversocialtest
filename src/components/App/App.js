import React, { Component } from 'react';

import './App.css';

import { HEADER_TITLE } from '../../data/constants';

import TopBar from '../TopBar/TopBar';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar title={HEADER_TITLE} />
        <LeftPanel chatHistory={[]} />
        <RightPanel chat={{}} />
      </div>
    );
  }
}

export default App;
