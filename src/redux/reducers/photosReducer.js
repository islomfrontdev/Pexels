import { LIKE_PHOTO, SET_CATEGORY, SET_PHOTOS } from "../types";

const initialState = {
  photos: [],
  category: "nature",
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case LIKE_PHOTO:
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default photosReducer;
