// Requires title.js, a react component
var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <Title>
          {this.props.title}
        </Title>
        <Summary>
          {this.props.summary}
        </Summary>
      </div>
    );
  }
});
