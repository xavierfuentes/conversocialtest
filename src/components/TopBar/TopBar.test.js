import React from 'react';
import { shallow } from 'enzyme';

import { HEADER_TITLE, HEADER_BUTTON_ADD_CHAT } from '../../data/constants';
import TopBar from './TopBar';

describe('<TopBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TopBar title={HEADER_TITLE} />);
  });

  test('renders a title', () => {
    const title = <h1 className='TopBar-title'>{HEADER_TITLE}</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  test('renders a "Add Chat" button', () => {
    const button = <button className='TopBar-cta'>{HEADER_BUTTON_ADD_CHAT}</button>;
    expect(wrapper.contains(button)).toEqual(true);
  });
});
