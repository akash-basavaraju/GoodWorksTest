import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Reducer from "./Reducer";
import App from "./App";
import "./index.css";

const store = createStore(
  Reducer,
  {
    flexiConfig: {
      items: [
        {
          name: "person_name",
          label: "Person's Name",
          type: "TextField"
        },
        {
          name: "states",
          label: "Person's state",
          type: "DropDown",
          values: ["Maharashtra", "Kerala", "Tamil Nadu"]
        }
      ]
    }
  },
  applyMiddleware(ReduxThunk)
);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
