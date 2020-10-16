import React from "react";
import mockup from "../image/phone__mockup.png";

class MM00 extends React.Component {
    render() {
        return(
            <div className="MM00 screen">
                <div className="MM00___main">MM00</div>

            <div className="screen01__mockup">
              <img src={mockup} />
              
              <div className="mockup__img"></div>
            </div>
            </div>
            
        )
    }
}
export default MM00;