var ButtonComponent = React.createClass({
  render: function(){
    return React.createElement('button',{},'Click me');
  }
});

ReactDOM.render(
    React.createElement(ButtonComponent, null),
    document.getElementById('react-button')
);