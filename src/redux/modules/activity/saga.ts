import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  doActivityFailure,
  doActivityFetchFinish,
  doActivitySuccess
} from "./actionCreators";

import { ACTIVITY_FETCH, IActivityFetchAction } from "./actionTypes";

import {
  fetchBeatSaberScore,
  fetchGithubActivity,
  fetchYoutubeVideos
} from "./operations";

function* workerGithubActivity(action: IActivityFetchAction) {
  try {
    const githubActivityList = yield call(
      fetchGithubActivity,
      action.githubProfileName
    );
    yield put(doActivitySuccess(githubActivityList));
  } catch (ex) {
    yield put(doActivityFailure(ex.message));
  }
}

function* workerYoutubeActivity(action: IActivityFetchAction) {
  try {
    const youtubeActivityList = yield call(
      fetchYoutubeVideos,
      action.youtubeChannelId
    );
    yield put(doActivitySuccess(youtubeActivityList));
  } catch (ex) {
    yield put(doActivityFailure(ex.message));
  }
}

function* workerBeatSaberActivity(action: IActivityFetchAction) {
  try {
    const beatSaberActivityList = yield call(
      fetchBeatSaberScore,
      "76561198042323311"
    );
    yield put(doActivitySuccess(beatSaberActivityList));
  } catch (ex) {
    yield put(doActivityFailure(ex.message));
  }
}

function* workerFetchActivity(action: IActivityFetchAction) {
  yield all([
    workerGithubActivity(action),
    workerYoutubeActivity(action),
    workerBeatSaberActivity(action)
  ]);
  yield put(doActivityFetchFinish());
}

export function* watcherFetchActivity() {
  yield takeLatest(ACTIVITY_FETCH, workerFetchActivity);
}