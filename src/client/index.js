import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ButtonComponent extends Component {
  constructor() {
    super();
    this.state = { count : 0 };
  }

  click() {
    this.setState({count: ++this.state.count});
  }

  render() {
    return <button onClick={this.click.bind(this)}>{'Click Me '+this.state.count}</button>;
  }
}

ReactDOM.render(
    <ButtonComponent />,
    document.getElementById('react-button')
);