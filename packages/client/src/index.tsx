import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import config from './config.json';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const API_URL = config.api.url;

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);
