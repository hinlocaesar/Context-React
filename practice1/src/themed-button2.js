import React from "react";
import { ThemeContext } from "./theme-context";

class ThemedButton2 extends React.Component {
  render() {
    let theme = this.context;
    return (
      <>
        Theme Button is called:
        {theme}
      </>
    );
  }
}
ThemedButton2.contextType = ThemeContext;

export default ThemedButton2;
