import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './index.css';
import Routing from './Routing';

function App() {

  const isAuthenticated = localStorage.getItem('isAuthed')
  return (
    <>
      <Routing isAuthenticated={isAuthenticated} />
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));
