import React from "react";
import { ThemeContext } from "./theme-context";
import ThemedButton from "./themed-button";

class App extends React.Component {
  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <>
        <ThemeContext.Provider value={"light"}>
          <ThemedButton />
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
