import React from "react";
import {MM00, MM01,MM02,MM03} from "../Screens";
import {Route} from "react-router-dom";

class Content extends React.Component {
    render() {
        return(
            <div>
                <Route exact component={MM00}/>
                <Route exact component={MM01}/>
                <Route exact component={MM02}/>
                <Route exact component={MM03}/>
            </div>
        )
    }
}
export default Content;