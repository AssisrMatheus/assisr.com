import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import runSagas from "./sagas";

// Middlewares
const middlewares = Array<any>();
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = createStore(reducers, applyMiddleware(...middlewares));

runSagas(sagaMiddleware);

export default store;
