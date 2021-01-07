import React, { Component } from 'react';
import DoctorApp from './components/DoctorApp';
import "./sass/main.scss";
class App extends Component {
  render() {
    return (
      <div className="container">
        <DoctorApp />
      </div>
    );
  }
}

export default App;