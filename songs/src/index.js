import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //Allows the app to access the store
import { createStore } from "redux"; // Creates a Redux store that holds the complete state tree of your app.
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
