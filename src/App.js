import React, { Component } from 'react';
import './App.css';
// import Footer from './Footer';
import Main from './Main';
import FooterPage from './FooterPage'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Main />
       <FooterPage/>
      </div>
    );
  }
}

export default App;
