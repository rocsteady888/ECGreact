import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Header/nav.js';
import Content from './Components/Content/content.js';
import Footer from './Components/Footer/footer.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
