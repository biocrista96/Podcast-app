import axios from "axios";
import getDataFromXml from "../utils/getDataFromXml";

const allorigins = "http://api.allorigins.win/get?url=";

const api = axios.create({
  baseURL: `https://itunes.apple.com/`,
});

export const getTopPodcasts = async () => {
  try {
    const response = await api.get(
      `us/rss/toppodcasts/limit=100/genre=1310/json`
    );
    const responseJson = response.data.feed;

    return responseJson;
  } catch (error) {
    throw error;
  }
};

export const getPodcastDetail = async (id) => {
  try {
    const response = await api.get(`lookup?id=${id}&media=podcast`);
    const responseJson = response.data;
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};

export const getEpisodes = async (url) => {
  try {
    const responseUrl = await axios.get(`${url}`);
    console.log(responseUrl);
    const responseXml = responseUrl.data;
    const response = getDataFromXml(responseXml);

    return response;
  } catch (error) {
    console.error(error);
  }
};
