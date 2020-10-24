import React from "react";
import { Header, Content, Footer } from "./components/layouts";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Route path="/" component={Header} />
        </header>
        <content>
          <Route path="/" component={Content} />
        </content>
        <footer>
          <Route path="/" component={Footer} />
        </footer>
      </div>
    );
  }
}

export default App;
