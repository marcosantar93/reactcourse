import axios from "axios";

const KEY = "AIzaSyAyGxz7ZPupklSgzuX3jbYzoj2AT3_6sOg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY }
});
