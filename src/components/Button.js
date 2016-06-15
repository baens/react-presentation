import React, {Component} from 'react';

export class ButtonComponent extends Component {
  constructor(props) {
    super();

    this.state = {};

    if(props.data) {
      this.state = props.data;
    }
  }

  click() {
    this.setState({count: ++this.state.count});
  }

  componentDidMount() {
    if(this.state.count) return;

    fetch('http://localhost:8081/')
        .then(data => data.text())
        .then(data => JSON.parse(data))
        .then(data => this.setState({count:data.number}));
  }

  render() {
    return <button onClick={this.click.bind(this)}>{'Click Me '+this.state.count}</button>;
  }
}