
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import { Input } from 'reactstrap';

import { BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


Enzyme.configure({ adapter: new Adapter() });

describe('<LoginForm />', () => {
  describe('Renders labels and inputs of correct types', () => {
    const wrapper = mount(<BrowserRouter><LoginPage /></BrowserRouter>);
    const inputArray = wrapper.find(Input);
    it('Should render username input fields', () => {
      const currentInput = inputArray.get(0).props;
      expect(currentInput.type).to.equal('text');
    });
    it('Should render password input fields', () => {
      const currentInput = inputArray.get(1).props;
      expect(currentInput.type).to.equal('password');
    });
  });
});
