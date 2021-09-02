import { createStore,applyMiddleware,compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "../reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer,composeEnhancers(
    applyMiddleware(logger,thunk)
));

export default store