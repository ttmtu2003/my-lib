
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import { FormGroup, Row } from 'reactstrap';

import { BrowserRouter } from 'react-router-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import LibBookDetailPage from '../pages/LibBookDetailPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<LibBookDetailPage />', () => {
  const wrapper = mount(<BrowserRouter><LibBookDetailPage /></BrowserRouter>);
  it('Should render 1 React component Cover with the default title "Untitled"', () => {
    expect(wrapper.find('.lib-detail-cover').find("h1").text()).to.be.equal("Untitled");
  });
  it('Should render 3 React components: FormGroup', () => {
    expect(wrapper.find(FormGroup)).to.have.lengthOf(3);
  });
  it('Should render 1 React component: Footer', () => {
    expect(wrapper.find('Footer')).to.have.lengthOf(1);
  });

});
