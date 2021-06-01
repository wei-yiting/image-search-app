import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KhSdBaLnGZBtxkqs3Zex8awxmh76a2t9OHHZWqNdDk8",
  },
});
