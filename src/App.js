import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {increment, decrement} from './actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement(e) {
    this.props.onIncrement();
  }
  onDecrement(e) {
    this.props.onDecrement();
  }
  render() {
    return (<div className="App">
      <h2>Contador</h2>
      <label>{this.props.counter}</label>
      <div>
        <button onClick={this.onIncrement}>Incrementar</button>
        <button onClick={this.onDecrement}>Decrementar</button>
      </div>
    </div>);
  }
}

const mapStateToProps = (value) => {
  return {counter: value}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
