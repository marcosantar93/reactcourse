import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

/*
 Every time that the state.language value changes, we want the context object to change. In order to do that, we push it into the Provider.
 In the value property we put the value that we want to be set in our context object, to communicate to the nested child 
 Provider and Consumer are components created automatically by the context system
 Provider creates a separate pipe of information every single time we use it
*/

export default App;
