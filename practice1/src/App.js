import React from "react";
import { ThemeContext } from "./theme-context";
import ThemedButton1 from "./themed-button1";

class App extends React.Component {
  render() {
    return (
      <>
        <ThemeContext.Provider value={"grey"}>
          <ThemedButton1 />
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
