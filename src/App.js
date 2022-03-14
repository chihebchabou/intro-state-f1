import React, { Component } from 'react';
import Counter from './Component/Counter';

export default class App extends Component {
  state = {
    timeapp: 0,
    togg: true,
  };
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ timeapp: this.state.timeapp + 1 });
  //   }, 1000);
  // }
  toggle() {
    this.setState({ togg: !this.state.togg });
    console.log(this.state.togg);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.toggle()}>toggle </button>
        {this.state.togg && <Counter />}
        {/* <p>Time App: {this.state.timeapp}</p> */}
      </div>
    );
  }
}
