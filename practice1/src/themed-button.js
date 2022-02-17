import React from "react";
import { ThemeContext } from "./theme-context";

class ThemedButton extends React.Component {
  render() {
    let theme = this.context;
    return <>{theme}</>;
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
