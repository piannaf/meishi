// Requires title.js, a react component
var Footer = React.createClass({
  render: function() {
    return (
      <Title>
        {this.props.title}
      </Title>
    );
  }
});
