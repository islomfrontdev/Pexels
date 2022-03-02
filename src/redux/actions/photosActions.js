import { getPhotos } from "../../api/getPhotos";
import { dispatch } from "../store";
import { LIKE_PHOTO, SET_CATEGORY, SET_PHOTOS } from "../types";

export const getPhotosBySearch = async (category) => {
  const obj = await getPhotos(category);
  if (obj.success) dispatch({ type: SET_PHOTOS, payload: obj.data.photos });
};
export const setCategory = (category) => {
  dispatch({ type: SET_CATEGORY, payload: category });
};
export const likePhoto = (index) => {
  console.log(index);
  dispatch({ type: LIKE_PHOTO, payload: index });
};
