import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core";
import {Provider} from "react-redux"
import Theme from "./theme";
import Store from "./redux/store"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <ThemeProvider theme={Theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
