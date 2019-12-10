/* eslint-disable consistent-return */
import { take, put, call } from 'redux-saga/effects';
import { actionTypes as FormActionTypes } from '../reducers/formReducer';
import { post } from '../api/api';

export function* addImages(imgs, imgNum) {
  try {
    return yield call(post, '/imgs', { imgs, imgNum });
  } catch (err) {
    console.log('添加图片失败');
  }
}

export function* addImagesFlow() {
  while (true) {
    const request = yield take(FormActionTypes.ADD_IMG);
    const response = yield call(addImages, request.imgs, request.imgNum);
  }
}
