const initialState = {
  imgList: [],
  imgNum: 0
};

export const actionTypes = {
  ADD_IMG: 'ADD_IMG',
  UPLOAD_IMG: 'UPLOAD_IMG',
  RESPONSE_ADD_IMG: 'RESPONSE_ADD_IMG'
};

export const actions = {
  addImg(imgs = [], num = 0) {
    return {
      type: actionTypes.ADD_IMG,
      imgs,
      num
    };
  },
  upload_img(imgs = [], num = 0) {
    return {
      type: actionTypes.UPLOAD_IMG,
      imgs,
      num
    };
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPONSE_ADD_IMG:
      return {
        ...state,
        imgList: [...action.data.list],
        imgNum: action.data.imgNum
      };
    case actionTypes.ADD_IMG:
      return {
        ...state,
        imgList: [...state.imgList, ...action.imgs],
        imgNum: state.imgNum + action.num
      };
    default:
      return state;
  }
}
