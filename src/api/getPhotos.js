import axios from "axios";
const access_token = "563492ad6f9170000100000147198ae5390d40f88e40b39bd8282f8f";
const instanceAxios = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    common: {
      Authorization: access_token,
    },
  },
});

export const getPhotos = async (category = "nature") => {
  try {
    const res = await instanceAxios.get(`/search?query=${category}`);
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
