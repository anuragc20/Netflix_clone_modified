// import { API_URL, API_KEY } from "../Config/config";

// const urls = [
//   `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=stranger`,
//   `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=breaking`,
//   `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=13`
// ];

// export function fetchTvShowsGrid() {
//   return Promise.all(
//     urls.map(items => {
//       return fetch(items).then(response => response.json());
//     })
//   );
// }

import { API_URL, API_KEY } from "../Config/config";
import axios from 'axios';

const urls = [
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=stranger`,
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=breaking`,
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=13`
];

export function fetchTvShowsGrid() {
  return Promise.all(
    urls.map(async(items) => {
      return await axios.get(items).then(response => response.data);
    })
  );
}
