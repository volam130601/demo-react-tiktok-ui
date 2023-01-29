import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers:  {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
  },
});

export const get = async (path, options = {}) => {
  const reponse = await httpRequest.get(path, options);
  return reponse.data;
};

export default httpRequest;
