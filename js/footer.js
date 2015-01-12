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
          instagramImg="https://cloud.githubusercontent.com/assets/70764/5604805/dd83ff62-9417-11e4-8e07-6f6da02f2e27.png"
          facebookUrl={this.props.facebookUrl}
          facebookImg="https://cloud.githubusercontent.com/assets/70764/5604804/dd83c498-9417-11e4-8433-430490aa8c59.png"
          twitterUrl={this.props.twitterUrl}
          twitterImg="https://cloud.githubusercontent.com/assets/70764/5604806/dd86efec-9417-11e4-9a13-3f7683cb01df.png"
          emailAddress={this.props.emailAddress}
          emailImg="https://cloud.githubusercontent.com/assets/70764/5604803/dd81ee8e-9417-11e4-9eb0-e41957016e08.png"
        />
      </div>
    );
  }
});
