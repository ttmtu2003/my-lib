// import React from 'react';
// import Enzyme, { mount } from 'enzyme';
// import { expect } from 'chai';

// import Routing from '../../src/Routing';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { MemoryRouter } from 'react-router-dom';

// import LoginPage from '../pages/LoginPage';
// import SignupPage from '../pages/SignupPage';
// import ExplorePage from '../pages/ExplorePage';
// import BookDetailPage from '../pages/BookDetailPage';
// import MyLibPage from '../pages/MyLibPage';
// import LibBookDetailPage from '../pages/LibBookDetailPage';
// import StatsPage from '../pages/StatsPage';


// Enzyme.configure({ adapter: new Adapter() });

// Object.defineProperty(window, 'localStorage', {
//   value: global.localStorage,
//   configurable: true,
//   enumerable: true,
//   writable: true
// });


// const authedAppProps = {
//   authenticated: true
// };

// const unauthedAppProps = {
//   authenticated: false
// };

// function getComponentFromRoute(route, props = authedAppProps.authenticated) {
//   return mount(
//     <MemoryRouter initialEntries={[route]}>
//       <Routing isAuthenticated={props.authenticated} />
//     </MemoryRouter>
//   );
// }

// describe('<Routing /> with <PrivateRoute />', () => {
//   describe('Renders correct components for authenticated user', () => {
//     it('Should render a <ExplorePage /> component with the /explore endpoint', () => {
//       const wrapper = getComponentFromRoute('/explore');
//       expect(wrapper.find(ExplorePage)).to.have.lengthOf(1);
//     });
//     it(
//       'Should render an <MyLibPage /> component with the /mylibrary' + ' endpoint',
//       () => {
//         const wrapper = getComponentFromRoute('/mylibrary');
//         expect(wrapper.find(MyLibPage)).to.have.lengthOf(1);
//       }
//     );
//     it(
//       'Should render a <BookDetailPage /> component with the /explore/book-detail/:bookId' +
//         'endpoint',
//       () => {
//         const wrapper = getComponentFromRoute('/explore/book-detail/:bookId');
//         expect(wrapper.find(BookDetailPage)).to.have.lengthOf(1);
//       }
//     );
//     it('Should render a <LibBookDetailPage /> component with the /mylibrary/book-detail/:bookId endpoint', () => {
//       const wrapper = getComponentFromRoute('/mylibrary/book-detail/:bookId');
//       expect(wrapper.find(LibBookDetailPage)).to.have.lengthOf(1);
//     });
//     it(
//       'Should render a <StatsPage /> component with the /reading-stats ' +
//         'endpoint',
//       () => {
//         const wrapper = getComponentFromRoute('/reading-stats');
//         expect(wrapper.find(StatsPage)).to.have.lengthOf(1);
//       }
//     );
//     it(
//       'Should redirect the authenticated user to <ExplorePage /> from the' +
//         ' /login endpoint',
//       () => {
//         const wrapper = getComponentFromRoute('/login');
//         expect(wrapper.find(ExplorePage)).to.have.lengthOf(1);
//       }
//     );
//     it(
//       'Should redirect the authenticated user to <LoginPage /> from the' +
//         ' /register endpoint',
//       () => {
//         const wrapper = getComponentFromRoute('/register');
//         expect(wrapper.find(LoginPage)).to.have.lengthOf(1);
//       }
//     );
//   })

// // HEHEHEHEHJHEDJHQEBDKEQBDKHEQWBDIUEQWBJHKEBDKUQEWBDKUILBEQWJKDHBED
//   // describe(
//   //   '<PrivateRoute /> prevents unauthorized members from viewing the' +
//   //     ' backend',
//   //   () => {
//   //     it(
//   //       'Should redirect the <MyLibPage /> component with the ' +
//   //         '/mylibrary endpoint',
//   //       () => {
//   //         const wrapper = getComponentFromRoute(
//   //           '/mylibrary',
//   //           unauthedAppProps
//   //         );
//   //         expect(wrapper.find(LoginPage)).to.have.lengthOf(1);
//   //       }
//   //     );
//   //     it(
//   //       'Should redirect the <ExplorePage /> component with the ' +
//   //         '/explore endpoint',
//   //       () => {
//   //         const wrapper = getComponentFromRoute('/explore', unauthedAppProps);
//   //         expect(wrapper.find(LoginPage)).to.have.lengthOf(1);
//   //       }
//   //     );
//   //     it(
//   //       'Should redirect the <StatsPage /> component with the /reading-stats ' +
//   //         'endpoint',
//   //       () => {
//   //         const wrapper = getComponentFromRoute('/reading-stats', unauthedAppProps);
//   //         expect(wrapper.find(LoginPage)).to.have.lengthOf(1);
//   //       }
//   //     );
//   //   }
//   // );

//   describe('Renders correct component for the unauthenticated user', () => {
//     it('Should render the <Login /> component with the /login endpoint', () => {
//       const wrapper = getComponentFromRoute('/login', unauthedAppProps);
//       expect(wrapper.find(LoginPage)).to.have.lengthOf(1);
//     });
//     it('Should redirect from the /explore endpoint ' +
//        'to the /login endpoint', () => {
//       const wrapper = getComponentFromRoute('/explore', unauthedAppProps);
//       expect(wrapper.find(LoginPage)).to.have.lengthOf(1);
//     });
//     it('Should redirect from the /mylibrary endpoint ' +
//        'to the /login endpoint', () => {
//       const wrapper = getComponentFromRoute(
//         '/mylibrary', unauthedAppProps
//       );
//       expect(wrapper.find(LoginPage)).to.have.lengthOf(1);
//     });
//     it('Should redirect from the /reading-stats endpoint ' +
//        'to the /login endpoint', () => {
//       const wrapper = getComponentFromRoute('/reading-stats', unauthedAppProps);
//       expect(wrapper.find(LoginPage)).to.have.lengthOf(1);
//     });
//   });
// });
