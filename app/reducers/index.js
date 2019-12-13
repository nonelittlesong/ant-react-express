import { combineReducers } from 'redux';
import { reducer as form } from './formReducer';

const initialState = {
  collapsed: true
};

export const actionTypes = {
  TOGGLE: 'TOGGLE'
};

export const actions = {
  toggle: (collapsed) => ({
    type: actionTypes.TOGGLE,
    collapsed
  })
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE:
      return {
        ...state,
        collapsed: !action.collapsed
      };
    default:
      return state;
  }
}

export default combineReducers({
  form,
  index: reducer
});
