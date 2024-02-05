import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import {AppWithRedux} from "./components/AppWithRedux";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWithRedux/>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
