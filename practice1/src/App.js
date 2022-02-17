import React from "react";
import { ThemeContext } from "./theme-context";
import ThemedButton2 from "./themed-button2";

class App extends React.Component {
  render() {
    return (
      <>
        <ThemeContext.Provider value={"light"}>
          <ThemedButton2 />
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
