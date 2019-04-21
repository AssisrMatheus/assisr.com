import { all, call, put, takeLatest } from "redux-saga/effects";

import { createActivityFailure, createActivitySuccess } from "./creators";

import { ACTIVITY_FETCH } from "./types";

import { fetchGithubActivity } from "./actions";

export function* workerFetchActivity({
  profileName
}: {
  type: string;
  profileName: string;
}) {
  try {
    const [github] = yield all([call(fetchGithubActivity, profileName)]);

    console.dir(github);

    yield put(createActivitySuccess(github));
  } catch (ex) {
    yield put(createActivityFailure(ex.message));
  }
}

export function* watcherFetchActivity() {
  yield takeLatest(ACTIVITY_FETCH, workerFetchActivity);
}
