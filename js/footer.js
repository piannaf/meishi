// Requires title.js, a react component
// Requires summary.js, a react component
// Requires author.js, a react component
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
        <Author>
          {this.props.summary}
        </Author>
      </div>
    );
  }
});
