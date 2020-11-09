import React from "react";
import mockup from "../image/mockup.png";

class MM01 extends React.Component {
  render() {
    return (
      <div className="MM01 screen">
        <div className="MM01__txt">
          <div className="MM01__txt1">txt1</div>
          <div className="MM01__txt2">txt2</div>
        </div>

        <div className="MM01__mockup">
          <img src={mockup} />
        </div>
      </div>
    );
  }
}
export default MM01;
