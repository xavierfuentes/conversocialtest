import React from 'react';
import { shallow } from 'enzyme';

import LeftPanel from './LeftPanel';

describe('<LeftPanel />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LeftPanel/>);
  });

  test('renders a basic left panel layout', () => {
    const leftPanel = <section>left panel</section>;
    expect(wrapper.contains(leftPanel)).toEqual(true);
  })
});
