import { fork } from 'redux-saga/effects';
import { addImagesFlow } from './formSaga';

export default function* rootSaga() {
  yield fork(addImagesFlow);
}
