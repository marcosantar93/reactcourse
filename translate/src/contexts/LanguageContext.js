import React from "react";

const Context = React.createContext("english"); // default value
// only sets the value one time, so we need to figure out how to update it
// we need to create an object that will act as a source of information. we need to communicate information into the context
// to do that, we will use a Provider

// we create the context in a separate file so that only the components that NEED to access it include it
// the challenge is not creating the context, rather than understanding how to put information in and out of it

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
