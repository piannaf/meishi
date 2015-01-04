// Requires title.js, a react component
// Requires summary.js, a react component
// Requires author.js, a react component
// Requires social.js, a react component
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
          {this.props.author}
        </Author>
        <Social 
          flickrUrl={this.props.flickrUrl}
          instagramUrl={this.props.instagramUrl}
          facebookUrl={this.props.facebookUrl}
          twitterUrl={this.props.twitterUrl}
          emailAddress={this.props.emailAddress}
        />
      </div>
    );
  }
});
