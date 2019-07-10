import React from "react";
import ReactDOM from "react-dom";

const App = props => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div>Hello</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
