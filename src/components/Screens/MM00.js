import React from "react";
import mockup from "../image/mockup.png";

class MM00 extends React.Component {
  render() {
    return (
      <div className="MM00 screen">
        <div className="MM00__main">
          <div className="MM00__txt">
            <div className="MM00__txt1"></div>
            <div className="MM00__txt2">MM00 Page</div>
          </div>

          <div className="MM00__mockup">
            <img src={mockup} />
            <div className="mockup__img"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MM00;
