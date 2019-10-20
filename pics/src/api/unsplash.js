import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e03ebbd4e6973dc1e9a26855337001d9c1582aa7c9f24c45b91b3f171f2be555"
  }
});