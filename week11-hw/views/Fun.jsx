const React = require("react");

function Fun() {
  return (
    <div>
      <h1>Hehehehe</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> <br/><br/>
      <a href='/'>Go back home</a>
    </div>
  );
}

module.exports = Fun;
