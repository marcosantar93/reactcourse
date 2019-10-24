import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // static contextType = LanguageContext; // adds a property to our Button class. Equivalent to writing Button.contextType = ... outside of the class
  // now that we have added a reference of contextType to our context object to our component class, our component class can access this.context
  // and get access to the data inside of this.context
  // contextType is only necesary when we want to assign data via this.context property

  renderButton = color => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({ language }) => (language === "english" ? "Submit" : "Indienen") // this function is called with the value inside of the context as an argument
        }
      </LanguageContext.Consumer>
    </button>
  );

  render() {
    // const text = this.context === "english" ? "Submit" : "Indienen"
    // return (<button className="ui button primary">{text}</button>);
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

/*
    we have created a context object. we passed a default value into it ("english"). and then we got that default value out of it
    by setting the contextType property to link our component to the context object. and then we got a reference to our data inside
    the context object thanks to this.context

    we would use Consumer whenever we want to get data from multiple context objects
*/
