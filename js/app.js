// Requires footer.js, a reactjs component
var TITLE = "Hello, world!"
  , SUMMARY = "Just a little blurb about me"
  , AUTHOR = "My name goes here"
  , FLICKR_URL = "https://www.flickr.com/"
  , INSTAGRAM_URL = "https://instagram.com/"
  , FACEBOOK_URL = "https://facebook.com/"
  , TWITTER_URL = "https://twitter.com/"
  , EMAIL_ADDRESS = "just_a_test@mailinator.com";

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
