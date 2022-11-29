// import React from 'react';
// import Enzyme, { mount } from 'enzyme';
// import { expect } from 'chai';
// import { Row } from 'reactstrap';

// import { BrowserRouter } from 'react-router-dom'
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// import BookDetailPage from '../pages/BookDetailPage'

// Enzyme.configure({ adapter: new Adapter() });

// describe('<BookDetailPage />', () => {

//   const wrapper = mount(<BrowserRouter><BookDetailPage /></BrowserRouter>);

//   it('Should render a <Row /> component with 2 children', () => {
//       const component = wrapper.find(Row);
//       expect(component).to.have.lengthOf(2);
//   });
//     // it('Should render password label & input fields', () => {
//     //   const currentInput = inputArray.get(1).props;
//     //   expect(currentInput.type).to.equal('password');
//     // });
//     // it('Should a <MajorDropdown > component', () => {
//     //   expect(wrapper.find(MajorDropdown)).to.have.lengthOf(1);
//     // });
//     // it('Should render captcha component', () => {
//     //   expect(wrapper.find(GoogleRecaptcha));
//     // });
//   });
