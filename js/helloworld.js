var Greeting = React.createClass({
  render: function() {
    return (
      <h1>
        {this.props.greeting}
      </h1>
    );
  }
});

var GREETING = "Hello, world!";

React.render(
  <Greeting greeting={GREETING}/>,
  document.getElementById('example')
);
