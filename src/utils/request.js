import axios from "axios";

const request = axios.create({
  baseURL: "https://scraptik.p.rapidapi.com/",
  headers:  {
    "X-RapidAPI-Key": "4dd52768admshc84996327dfdd8cp18363ajsn766e280ff097",
    "X-RapidAPI-Host": "scraptik.p.rapidapi.com",
  },
});

export const get = async (path, options = {}) => {
  const reponse = await request.get(path, options);
  return reponse.data;
};

export default request;
