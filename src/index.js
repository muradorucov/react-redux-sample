import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./App";
import counterReducer from "./redux/reducers/counter.reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(counterReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
