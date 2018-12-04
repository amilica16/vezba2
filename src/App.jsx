import React, { Component } from "react";

import withMouse from "./withMouse";
import measureTime from "./measureTime";

class App extends Component {
  render() {
    const { mouse, seconds } = this.props;

    return (
      <div
        style={{
          height: "100vh",
          cursor: "crosshair"
        }}
      >
        <div>
          <div>
            Time passed: <b>{seconds}</b>
          </div>
          {mouse ? (
            <h1>
              Mouse is at ({mouse.x}, {mouse.y})
            </h1>
          ) : (
            <h1>Wait for it!</h1>
          )}
        </div>
      </div>
    );
  }
}
const AppWithMouse = measureTime(withMouse(App));

export default AppWithMouse;
