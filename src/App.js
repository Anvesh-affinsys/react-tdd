import React from 'react';

export default class App extends React.Component {
  state={foo:"1"}

  render() {
    return <div className="hello">Hello, {this.state.foo}!</div>;
  }
}
