function imgWithDefaultText(img, text) {
    if (img) {
      return <img src={img} />;
    } else {
      return text;
    }
}

var Flickr = React.createClass({
  render: function() {
    var content;
    
    if (this.props.img) {
      content = <img src={this.props.img} />;
    } else {
      content = "Flickr";
    }
    
    return (
      <a href={this.props.url}>{content}</a>
    );
  }
});

var Instagram = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>Instagram</a>
    );
  }
});

var Facebook = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>Facebook</a>
    );
  }
});

var Twitter = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>Twitter</a>
    );
  }
});

var Email = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>Email</a>
    );
  }
});

var Social = React.createClass({
  render: function() {
    return (
      <ul>
        <li>
          <Flickr url={this.props.flickrUrl} img={this.props.flickrImg} />
        </li>
        <li>
          <Instagram url={this.props.instagramUrl} />
        </li>
        <li>
          <Facebook url={this.props.facebookUrl} />
        </li>
        <li>
          <Twitter url={this.props.twitterUrl} />
        </li>
        <li>
          <Email url={"mailto:" + this.props.emailAddress} />
        </li>
      </ul>
    );
  }
});
