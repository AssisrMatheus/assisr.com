import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";

// Middlewares
const middlewares = Array<any>();
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

export default createStore(reducers, applyMiddleware(...middlewares));
