var Greeting = React.createClass({
  render: function() {
    return (
      <h1>
        {this.props.children}
      </h1>
    );
  }
});

var GREETING = "Hello, world!";

React.render(
  <Greeting>{GREETING}</Greeting>,
  document.getElementById('example')
);
