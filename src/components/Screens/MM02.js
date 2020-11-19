import React from "react";
import mockup from "../image/mockup.png";

class MM02 extends React.Component {
  render() {
    return (
      <div className="MM02 screen">
        <div className="MM02__txt">
          <div className="MM02__txt1">MM02</div>
          <div className="MM02__txt2">Page</div>
        </div>

        <div className="MM02__mockup">
          <img src={mockup} />
        </div>
      </div>
    );
  }
}
export default MM02;
