import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('constructor()');
    this.state = {
      count: 0,
      timercount: 0,
      memory: null,
      text: '',
    };
  }
  componentDidMount() {
    console.log('componentDidMount()');
    this.state.memory = setInterval(() => {
      this.setState({
        timercount: this.state.timercount + 1,
      });
    }, 1000);
    console.log(this.state.memory);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount()');
    clearInterval(this.state.memory);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    console.log('render()');
    return (
      <div>
        <button onClick={() => this.increment()}>+</button> <br />
        <p> {this.state.count} </p>
        <button onClick={() => this.decrement()}>-</button> <br />
        <input
          type="text"
          onChange={e => this.setState({ text: e.target.value })}
        />
        <p>{this.state.text} </p>
        <p>Counter :{this.state.timercount}</p>
      </div>
    );
  }
}
