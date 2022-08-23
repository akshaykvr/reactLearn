import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
import { createPortal } from 'react-dom';

// function App(props) {
//   const [lastname, setLastName] = useState('abdulla')
  
//   const changeMe = () => {
//     console.log('called')
//     setLastName('abcd')
//   };
//   console.log(props)
//   return (
//     <div className="App">
//       Hello, {props.name} {lastname}
//       <button onClick={changeMe}>Click me</button>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lastname: 'abdulla'};
  }
  
  changeMe = () => {
    this.setState({lastname: 'abcd'});
  };


  render() {
    return (
      <div className="App">
        Hello, {this.props.name} {this.state.lastname}
        <button onClick={this.changeMe}>Click me</button>
      </div>
    );
  }
}

export default App;
