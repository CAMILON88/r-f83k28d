import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(...args) {
     super(...args)
     this.state = {
       contador: 0
     }
   }
  increment() {
      this.setState({

        contador: this.state.contador + 1
      });
    }
  render() {

    return (

      <div>
        <span className="value">{this.state.contador}</span>
        <button id="inc" onClick={this.increment.bind(this)}>Incrementa</button>
      </div>

    );

  }
}

export default App;
