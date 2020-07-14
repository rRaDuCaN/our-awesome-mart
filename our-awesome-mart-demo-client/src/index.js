import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
// import store from "./reduxFeatures/store";
import { ApolloProvider } from "@apollo/client";
import {client} from "./apolloClient/apolloClient";

// Although redux is set up and good to work, it would be an overkill to use it in this
// tiny chunk of a bigger application, I'll stick to react's useReducer mostly.

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </ApolloProvider>,
  document.getElementById("root")
);
