// Requires footer.js, a reactjs component
var TITLE = "Hello, world!";
var SUMMARY = "Just a little blurb about me";

React.render(
  <Footer title={TITLE} summary={SUMMARY} />,
  document.getElementById('example')
);
