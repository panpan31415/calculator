import React from "react";
import takeInput from "../logic/takeInput";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import ThemeSelector from "./ThemeSelector";
import historyAssistant from "../logic/historyAssistant";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: {
        value: "0",
        source: null,
      },
      first: "",
      second: "",
      result: "0",
      operation: {
        type: null,
        activated: false,
      },
      maxDigits: 10,
      history: {
        calculations: [],
        currentIndex: -1,
      },
      UI: {
        display: true,
        maxmize: true,
        settings: false,
        percentage: false,
      },
    };
  }

  handleClick = buttonName => {
    this.setState(takeInput(this.state, buttonName));
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
  hasNext = () => {
    return historyAssistant(this.state.history).hasNext();
  };
  hasPrevious = () => {
    return historyAssistant(this.state.history).hasPrevious();
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
            displayValue={this.state.displayValue}
            handleClick={this.handleClick}
            maxmize={this.state.UI.maxmize}
            operation={this.state.operation}
            hasNext={this.hasNext}
            hasPrevious={this.hasPrevious}
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
