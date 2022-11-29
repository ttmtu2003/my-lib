
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import NavBar from '../components/Navbar/Navbar';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { NavbarBrand, NavLink } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

describe('<NavBar />', () => {
  it('Should render a <NavbarBrand /> with the website title', () => {
    const wrapper = mount(<NavBar />);
    expect(
      wrapper
        .find(NavbarBrand)
        .prop('children')
        .toString() === 'MYLIB'
    );
  });
  it('Should render 3 <NavLink /> tags', () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.find(NavLink)).to.have.lengthOf(3);
  });
});
