// import { API_URL, API_KEY } from "../Config/config";

// const urls = [
//   `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
//   `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
//   `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=3`
// ];

// export const fetchData = () => {
//   return Promise.all(
//     urls.map(items => {
//       return fetch(items).then(response => response.json());
//     })
//   );
// };

// export const fetchAdditionalMovieData = id => {
//   const url = `${API_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits&language=en-US`;
//   return fetch(url).then(response => response.json());
// };
//above url is used for fetching data for below main movie section
//changes applied here i used axios.get() in place of fetch()
import { API_URL, API_KEY } from "../Config/config";
import axios from 'axios';

const urls = [
  `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=3`
];

export const fetchData = () => {
  return Promise.all(
    urls.map(items => {
      return axios.get(items).then(response => response.data);//In promise axios.get(items).then(response => response.json()); is not working but axios.get(items).then(response => response.data); working
    })
  );
};

export const fetchAdditionalMovieData = id => {
  const url = `${API_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits&language=en-US`;
  return axios.get(url).then(response => response.json());//.json() not created any problem with axios.get()
};