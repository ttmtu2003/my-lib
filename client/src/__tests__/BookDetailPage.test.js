import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import { Row } from 'reactstrap';

import { BrowserRouter } from 'react-router-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import BookDetailPage from '../pages/BookDetailPage'

Enzyme.configure({ adapter: new Adapter() });

describe('<BookDetailPage />', () => {

  const wrapper = mount(<BrowserRouter><BookDetailPage /></BrowserRouter>);

  it('Should render a <Row /> component with 2 children', () => {
      const component = wrapper.find('.book-detail');
      expect(component).to.have.lengthOf(2);
  });
  it('Should render 1 React component: NavBar', () => {
    expect(wrapper.find('NavBar')).to.have.lengthOf(1);
  });
  it('Should render 1 React component: Footer', () => {
    expect(wrapper.find('Footer')).to.have.lengthOf(1);
  });

});
