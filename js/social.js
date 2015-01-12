function imgWithDefaultText(img, text) {
    if (img) {
      return <img src={img} />;
    } else {
      return text;
    }
}

var Flickr = React.createClass({
  render: function() {
    var content = imgWithDefaultText(this.props.img, "Flickr");
    
    return (
      <a href={this.props.url}>{content}</a>
    );
  }
});

var Instagram = React.createClass({
  render: function() {
    var content = imgWithDefaultText(this.props.img, "Instagram");
    
    return (
      <a href={this.props.url}>{content}</a>
    );
  }
});

var Facebook = React.createClass({
  render: function() {
    var content = imgWithDefaultText(this.props.img, "Facebook");
    
    return (
      <a href={this.props.url}>{content}</a>
    );
  }
});

var Twitter = React.createClass({
  render: function() {
    var content = imgWithDefaultText(this.props.img, "Twitter");
    
    return (
      <a href={this.props.url}>{content}</a>
    );
  }
});

var Email = React.createClass({
  render: function() {
    var content = imgWithDefaultText(this.props.img, "Email");
    
    return (
      <a href={this.props.url}>{content}</a>
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
          <Instagram url={this.props.instagramUrl} img={this.props.instagramImg} />
        </li>
        <li>
          <Facebook url={this.props.facebookUrl} img={this.props.facebookImg} />
        </li>
        <li>
          <Twitter url={this.props.twitterUrl} img={this.props.twitterImg} />
        </li>
        <li>
          <Email url={"mailto:" + this.props.emailAddress} img={this.props.emailImg} />
        </li>
      </ul>
    );
  }
});
