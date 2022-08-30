import axios from "axios";

const baseURL = "https://api.pexels.com/v1";

export const apiUrl = axios.create({
  baseURL,
  headers: {
    Authorization:
      "Bearer 563492ad6f917000010000016aaa29a2468a40d7a7699c7b855a9ebf",
  },
});

// export const imageConvert = (url) => {
//   if (!url) {
//     return "https://i.pinimg.com/474x/99/65/75/996575862a88cccd26f3ea1b217c2ef2.jpg";
//   }
//   return "https://image.tmdb.org/t/p/original" + url;
// };
