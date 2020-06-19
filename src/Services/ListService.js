// import { API_URL, API_KEY } from "../Config/config";

// export const fetchListData = id => {
//   const url = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
//   return fetch(url).then(response => response.json());
// };









//fetching data using axios
import { API_URL, API_KEY } from "../Config/config";
import axios from 'axios';

export const fetchListData = async(id) => {
  const url = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
  return await axios.get(url).then(response => response.data);
};









// axios.get(`https://jsonplaceholder.typicode.com/users`)
// .then(res => {
//   const persons = res.data;
//   this.setState({ persons });
// })