import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducer, combineReducers} from 'redux';
import * as Sentry from "@sentry/react";

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
    // Optionally pass options
  });

//Use Sentry.createReduxEnhancer at the same place that you initialize your Redux store.
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    sentryReduxEnhancer

});

export default allReducers;
