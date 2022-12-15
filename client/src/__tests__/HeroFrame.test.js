
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HeroFrame from '../components/HeroFrame';

Enzyme.configure({ adapter: new Adapter() });

describe('<HeroFrame />', () => {

  const wrapper = mount(<HeroFrame />);
  it('Should render a <Cover /> component with 1 child', () => {
      const component = wrapper.find(".hero-frame");
      expect(component).to.have.lengthOf(2);
  });

});
