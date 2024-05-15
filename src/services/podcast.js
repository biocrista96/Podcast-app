import axios from "axios";
import getDataFromXml from "../utils/getDataFromXml";

const allorigins = "http://api.allorigins.win/get?url=";

const api = axios.create({
  baseURL: `${allorigins}https://itunes.apple.com/`,
});

export const getTopPodcasts = async () => {
  try {
    const response = await api.get(
      `us/rss/toppodcasts/limit=100/genre=1310/json`
    );
    const responseJson = JSON.parse(response.data.contents);
    return responseJson;
  } catch (error) {
    throw error;
  }
};

export const getPodcastDetail = async (id) => {
  try {
    const response = await api.get(`lookup?id=${id}&media=podcast`);
    const responseJson = JSON.parse(response.data.contents);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};

export const getEpisodes = async (url) => {
  console.log("hola2");
  try {
    console.log("aloooo");
    const responseUrl = await axios.get(`${url}`);
    console.log(responseUrl, "hola?");
    const responseXml = responseUrl.data;
    const response = getDataFromXml(responseXml);

    return response;
  } catch (error) {
    console.error(error);
  }
};
