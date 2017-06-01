import React from 'react';
import { shallow } from 'enzyme';

import RightPanel from './RightPanel';
import Conversation from '../../modules/chat/components/Conversation/Conversation';

describe('<RightPanel />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RightPanel chat={{}}/>);
  });

  test('renders a basic right panel layout', () => {
    const rightPanel = <section><Conversation /></section>;
    expect(wrapper.contains(rightPanel)).toEqual(true);
  })
});
