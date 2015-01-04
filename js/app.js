// Requires footer.js, a reactjs component
var TITLE = "Hello, world!";
var SUMMARY = "Just a little blurb about me";
var AUTHOR = "My name goes here";
var FLICKR_URL = "https://www.flickr.com/"
var INSTAGRAM_URL = "https://instagram.com/"
var FACEBOOK_URL = "https://facebook.com/"
var TWITTER_URL = "https://twitter.com/"
var EMAIL_ADDRESS = "just_a_test@mailinator.com"

React.render(
  <Footer
    title={TITLE}
    summary={SUMMARY}
    author={AUTHOR}
    flickrUrl={FLICKR_URL}
    instagramUrl={INSTAGRAM_URL}
    facebookUrl={FACEBOOK_URL}
    twitterUrl={TWITTER_URL}
    emailAddress={EMAIL_ADDRESS}
  />,
  document.getElementById('example')
);
