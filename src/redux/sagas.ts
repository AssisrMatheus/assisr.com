import { SagaMiddleware } from "redux-saga";
import { watcherFetchActivity } from "./modules/activity/saga";

const runSagas = (sagaMiddleware: SagaMiddleware) => {
  sagaMiddleware.run(watcherFetchActivity);
};

export default runSagas;
