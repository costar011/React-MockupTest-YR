import React from "react";
import {MM00} from "../Screens";
import {Route} from "react-router-dom";

class Content extends React.Component {
    render() {
        return(
            <div>
                <Route exact component={MM00}></Route>
            </div>
        )
    }
}
export default Content;