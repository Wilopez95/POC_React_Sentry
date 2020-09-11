import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from '@sentry/tracing';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'

//initialize the integration in your call to Sentry.init:
Sentry.init({
  dsn: "https://e4e6f6668a23451ba1d6d6cbddc5ff5b@o446490.ingest.sentry.io/5425014",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});




const store = createStore(allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//The @sentry/react package exposes an error boundary component that automatically sends JavaScript errors from inside a React component tree to Sentry. 
ReactDOM.render(
  <Sentry.ErrorBoundary fallback={"An error has occured"}>
    <Provider store = {store}>
      <App />
    </Provider>
  </Sentry.ErrorBoundary>,
  document.getElementById('root')
);

