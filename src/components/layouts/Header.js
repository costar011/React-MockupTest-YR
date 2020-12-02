import React from "react";
import mockup from "../image/mockup.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__title">
          <div className="Header__title1">Again</div>
          <div className="Header__title2">Movie</div>
        </div>

        <div className="Header__mockup">
          <img src={mockup} />
        </div>
      </div>
    );
  }
}

export default Header;
