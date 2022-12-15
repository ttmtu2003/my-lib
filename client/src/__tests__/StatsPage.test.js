
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import { Bar, Pie } from 'react-chartjs-2';
import { BrowserRouter } from 'react-router-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import StatsPage from '../pages/StatsPage';

Enzyme.configure({ adapter: new Adapter() });


describe('<StatsPage />', () => {
  it('Should render a <Bar /> tag', () => {
    const wrappers = shallow(<BrowserRouter><StatsPage /></BrowserRouter>);
    expect(wrappers.find(Bar));
  });
  it('Should render a <Pie /> tag', () => {
    const wrapper = shallow(<BrowserRouter><StatsPage /></BrowserRouter>);
    expect(wrapper.find(Pie));
  });
});
