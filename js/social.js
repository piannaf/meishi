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
      <div>
        <Flickr>
          {this.props.flickrUrl}
        </Flickr>
        <Instagram>
          {this.props.instagramUrl}
        </Instagram>
        <Facebook>
          {this.props.facebookUrl}
        </Facebook>
        <Twitter>
          {this.props.twitterUrl}
        </Twitter>
        <Email>
          mailto:{this.props.emailAddress}
        </Email>
      </div>
    );
  }
});
