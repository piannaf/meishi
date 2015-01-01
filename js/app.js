// Requires footer.js, a reactjs component
var TITLE = "Hello, world!";
var SUMMARY = "Just a little blurb about me";
var AUTHOR = "My name goes here";

React.render(
  <Footer title={TITLE} summary={SUMMARY} author={AUTHOR} />,
  document.getElementById('example')
);
