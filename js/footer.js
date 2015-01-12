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
          flickrImg="https://cloud.githubusercontent.com/assets/70764/5604802/dd80b12c-9417-11e4-87fa-50a48ee9f3d1.png"
          instagramUrl={this.props.instagramUrl}
          facebookUrl={this.props.facebookUrl}
          twitterUrl={this.props.twitterUrl}
          emailAddress={this.props.emailAddress}
        />
      </div>
    );
  }
});
