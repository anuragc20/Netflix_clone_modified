import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";//it is used to provide all state information to app
import { store, persistor } from "./Redux/store.js";
import { PersistGate } from "redux-persist/integration/react";//it is used inside provider so that it can save store data for further used 


let element = () => (<Provider store={store}>
  <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </BrowserRouter>
</Provider>);//this is my own way
ReactDOM.render(
  element(),

  document.getElementById("root")
);




// ReactDOM.render(
//   <Provider store={store}>
//   <BrowserRouter>
//     <PersistGate persistor={persistor}>
//       <App />
//     </PersistGate>
//   </BrowserRouter>
// </Provider> ,

//   document.getElementById("root")
// );
