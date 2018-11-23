import React from "react";
import calculate from "../logic/calculate";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import ThemeSelector from "./ThemeSelector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayingValue: 0,
      first: 0,
      second: 0,
      operation: null,
      history: {
        values: [],
        currentIndex: 0,
      },
      UI: {
        display: true,
        maxmize: true,
        settings: false,
      },
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  close = () => {
    this.setState({ ...this.state, UI: { ...this.state.UI, display: false } });
  };

  maxmize = () => {
    this.setState({ ...this.state, UI: { ...this.state.UI, maxmize: true } });
  };

  minimize = () => {
    this.setState({ ...this.state, UI: { ...this.state.UI, maxmize: false } });
  };
  toggleSettings = () => {
    this.setState({
      ...this.state,
      UI: { ...this.state.UI, settings: !this.state.UI.settings },
    });
  };

  render() {
    return (
      <div
        className="app-container"
        style={{ display: `${this.state.UI.display ? "block" : "none"}` }}
      >
        <div
          className="app--front"
          style={{
            transform: `rotateY(${this.state.UI.settings ? 180 : 0}deg)`,
          }}
        >
          <Header
            key="front"
            close={this.close}
            maxmize={this.maxmize}
            minimize={this.minimize}
            toggleSettings={this.toggleSettings}
          />
          <Main
            total={this.state.total}
            handleClick={this.handleClick}
            maxmize={this.state.UI.maxmize}
          />
        </div>
        <div
          className="app--back"
          style={{
            transform: `rotateY(${this.state.UI.settings ? 0 : -180}deg)`,
          }}
        >
          <Header
            key="back"
            close={this.close}
            maxmize={this.maxmize}
            minimize={this.minimize}
            toggleSettings={this.toggleSettings}
          />
          <div
            style={{
              display: `${this.state.UI.maxmize ? "block" : "none"}`,
              backgroundImage: "linear-gradient(45deg, #0C2140, #09182E)",
              height: "100%",
              width: "100%",
              border: "1px solid transparent",
            }}
          >
            <ThemeSelector />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
