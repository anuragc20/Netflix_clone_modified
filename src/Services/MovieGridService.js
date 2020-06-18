// import { API_URL, API_KEY } from "../Config/config";

// const urls = [
//   `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=infinity`,
//   `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=The%20Lion%20King`,
//   `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=how%20to%20train%20your%20dragon%20the`
// ];

// export function fetchGrid() {
//   return Promise.all(
//     urls.map(items => {
//       return fetch(items).then(response => response.json());
//     })
//   );
// }
import { API_URL, API_KEY } from "../Config/config";
import axios from 'axios';

const urls = [
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=infinity`,
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=The%20Lion%20King`,
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=how%20to%20train%20your%20dragon%20the`
];

export function fetchGrid() {
  return Promise.all(//Promise. all-This method is useful for when you want to wait for more than one promise to complete or The Promise. all(iterable) method returns a promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first passed promise that rejects. ... Just use Promise.For example, suppose you need to gather information from three separate remote API calls and when you have the results from all three API calls, you then need to run some further code using all three results.That situation would be perfect for Promise.all()
    urls.map(items => {
      return axios.get(items).then(response => response.data);//here also same improvement like movieService
    })
  );
}
