import React from "react";
import { Route } from "react-router-dom";
import mockup from "../image/mockup.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__title">AGAIN</div>

        <div className="Hedaer__main">
          <div className="Header__main1">Movie</div>
          <div className="Header__mockup">
            <img src={mockup} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
