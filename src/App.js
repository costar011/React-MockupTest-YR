import React from "react";
import { Header } from "./components/layouts";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Route path="/" component={Header} />
        </header>
      </div>
    );
  }
}

export default App;