import React, {Component} from 'react';
import {ButtonComponent} from './Button';

export class RootComponent extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  
  render() {
    return (
        <div>
          <ButtonComponent data={this.props.data} />
          <ButtonComponent data={this.props.data} />
        </div>
    );
  }  
}