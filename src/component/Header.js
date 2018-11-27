import * as React from "react";
import { IconClose, IconMaxmize, IconMinimize, IconSettings } from "./icons";
import "./Header.css";
const Header = ({ close, maxmize, minimize, toggleSettings }) => {
  return (
    <header className="Header">
      <div className="Header__button Header__button--close" onClick={close}>
        <IconClose />
      </div>
      <div className="Header__button Header__button--max" onClick={maxmize}>
        <IconMaxmize />
      </div>
      <div className="Header__button Header__button--min" onClick={minimize}>
        <IconMinimize />
      </div>
      <div
        className="Header__button Header__button--config"
        onClick={toggleSettings}
      >
        <IconSettings />
      </div>
    </header>
  );
};

export default Header;
