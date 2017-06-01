import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import TopBar from '../TopBar/TopBar';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders a top bar', () => {
    const rightPanel = <TopBar />;
    expect(wrapper.contains(rightPanel)).toEqual(true);
  });

  test('renders a left panel', () => {
    const leftPanel = <LeftPanel />;
    expect(wrapper.contains(leftPanel)).toEqual(true);
  });

  test('renders a right panel', () => {
    const rightPanel = <RightPanel />;
    expect(wrapper.contains(rightPanel)).toEqual(true);
  });
});