var Title = React.createClass({
  render: function() {
    return (
      <h1>
        {this.props.children}
      </h1>
    );
  }
});

var TITLE = "Hello, world!";

React.render(
  <Title>{TITLE}</Title>,
  document.getElementById('example')
);
