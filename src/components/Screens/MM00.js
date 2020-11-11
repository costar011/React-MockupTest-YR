import React from "react";
import mockup from "../image/mockup.png";

class MM00 extends React.Component {
  render() {
    return (
      <div className="MM00 screen">
        <div className="MM00__txt">
          <div className="MM00__txt1">MM00 Test</div>
          <div className="MM00__txt2">Page</div>
        </div>

        <div className="MM00__mockup">
          <img src={mockup} />
        </div>
      </div>
    );
  }
}

export default MM00;
