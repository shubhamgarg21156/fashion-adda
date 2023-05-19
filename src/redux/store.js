import { configureStore } from '@reduxjs/toolkit';
import reducers from "./reducers/index";
import { applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const store = configureStore({reducer:reducers}, applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;