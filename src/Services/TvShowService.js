// import { API_URL, API_KEY } from "../Config/config";

// const urls = [
//   `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
//   `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=4`,
//   `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=3`
// ];

// export function fetchData() {
//   return Promise.all(
//     urls.map(items => {
//       return fetch(items).then(response => response.json());
//     })
//   );
// }

// export const fetchAdditionalTVData = id => {
//   const url = `${API_URL}tv/${id}?api_key=${API_KEY}&append_to_response=videos,credits&language=en-US`;
//   return fetch(url).then(response => response.json());
// };






import { API_URL, API_KEY } from "../Config/config";
import axios from 'axios';

const urls = [
  `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=4`,
  `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=3`
];

export function fetchData() {
  return Promise.all(
    urls.map(async(items) => {
      return await axios.get(items).then(response => response.data);
    })
  );
}

export const fetchAdditionalTVData = async(id )=> {
  const url = `${API_URL}tv/${id}?api_key=${API_KEY}&append_to_response=videos,credits&language=en-US`;
  return await axios.get(url).then(response => response.data);
};
