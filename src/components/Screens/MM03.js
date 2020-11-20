import React from "react";
import mockup from "../image/mockup.png";

class MM03 extends React.Component {
  render() {
    return (
      <div className="MM03 screen">
        <div className="MM03__txt">
          <div className="MM03__txt1">MM03</div>
          <div className="MM03__txt2">Page</div>
        </div>

        <div className="MM03__mockup">
          <img src={mockup} />
        </div>
      </div>
    );
  }
}
export default MM03;
