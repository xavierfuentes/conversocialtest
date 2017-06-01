import React from 'react';
import { shallow } from 'enzyme';

import RightPanel from './RightPanel';

describe('<RightPanel />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RightPanel chat={{}}/>);
  });

  test('renders a basic right panel layout', () => {
    const rightPanel = <section>right panel</section>;
    expect(wrapper.contains(rightPanel)).toEqual(true);
  })
});
