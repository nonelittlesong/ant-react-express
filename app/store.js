import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

const storeEnhancers = compose(
  applyMiddleware(...middlewares, sagaMiddleware)
);

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, storeEnhancers);
  sagaMiddleware.run(rootSaga);
  return store;
}
