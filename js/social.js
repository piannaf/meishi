var Flickr = React.createClass({
  render: function() {
    return (
      <a href={this.props.children}>Flickr</a>
    );
  }
});

var Instagram = React.createClass({
  render: function() {
    return (
      <a href={this.props.children}>Instagram</a>
    );
  }
});

var Facebook = React.createClass({
  render: function() {
    return (
      <a href={this.props.children}>Facebook</a>
    );
  }
});

var Twitter = React.createClass({
  render: function() {
    return (
      <a href={this.props.children}>Twitter</a>
    );
  }
});

var Email = React.createClass({
  render: function() {
    return (
      <a href={this.props.children}>Email</a>
    );
  }
});

var Social = React.createClass({
  render: function() {
    return (
      <ul>
        <li>
          <Flickr>{this.props.flickrUrl}</Flickr>
        </li>
        <li>
          <Instagram>{this.props.instagramUrl}</Instagram>
        </li>
        <li>
          <Facebook>{this.props.facebookUrl}</Facebook>
        </li>
        <li>
          <Twitter>{this.props.twitterUrl}</Twitter>
        </li>
        <li>
          <Email>{"mailto:" + this.props.emailAddress}</Email>
        </li>
      </ul>
    );
  }
});
