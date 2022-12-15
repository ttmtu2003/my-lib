
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';

import { BrowserRouter } from 'react-router-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import MyLibPage from '../pages/MyLibPage'

Enzyme.configure({ adapter: new Adapter() });

describe('<MyLibPage />', () => {

  const wrapper = mount(<BrowserRouter><MyLibPage /></BrowserRouter>);

  it('Should render 1 React component: NavBar', () => {
    expect(wrapper.find('NavBar')).to.have.lengthOf(1);
  });
  it('Should render Cover component with 1 child', () => {
    expect(wrapper.find('.lib-cover')).to.have.lengthOf(2);
  });
  it('Should render the Cover with My Library as title', () => {
    expect(wrapper.find('.lib-cover').find("h1").text()).to.be.equal("My Library");
  });
});
