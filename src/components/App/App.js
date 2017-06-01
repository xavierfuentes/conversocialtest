import React, { Component } from 'react';

import './App.css';

import TopBar from '../TopBar/TopBar';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

class App extends Component {
  render() {
    return (
      <article className="App">
        <TopBar />

        <section className="App-content">
          <LeftPanel />
          <RightPanel />
        </section>
      </article>
    );
  }
}

export default App;
