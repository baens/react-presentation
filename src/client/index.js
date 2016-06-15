var ButtonComponent = React.createClass({
  getInitialState: function () {
    return {
      count : 0
    };
  },

  click: function() {
    this.setState({count: ++this.state.count});
  },

  render: function(){
    return React.createElement('button',{onClick:this.click},'Click me '+this.state.count);
  }
});

ReactDOM.render(
    React.createElement(ButtonComponent, null),
    document.getElementById('react-button')
);