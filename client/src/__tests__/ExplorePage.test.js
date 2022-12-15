
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';

import { BrowserRouter } from 'react-router-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ExplorePage from '../pages/ExplorePage'

Enzyme.configure({ adapter: new Adapter() });

describe('<ExplorePage />', () => {

  const wrapper = mount(<BrowserRouter><ExplorePage /></BrowserRouter>);

  it('Should render 1 React component: NavBar', () => {
    expect(wrapper.find('NavBar')).to.have.lengthOf(1);
  });
  it('Should render 1 React component: HeroFrame', () => {
    expect(wrapper.find('HeroFrame')).to.have.lengthOf(1);
  });
  it('Should render 1 React component: SearchResult', () => {
    expect(wrapper.find('SearchResult')).to.have.lengthOf(1);
  });

});
