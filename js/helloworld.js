var Greeting = React.createClass({
    render: function() {
        return (<h1>Hello, world!</h1>);
    }
});

React.render(
  <Greeting />,
  document.getElementById('example')
);
