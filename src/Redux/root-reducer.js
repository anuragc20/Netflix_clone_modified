import { combineReducers } from "redux";
import movieReducer from "./Movie/movie-reducer";
import TVReducer from "./TVShow/tv-reducer";
import userReducer from "./User/user-reducer";
import searchReducer from "./Search/search-reducer";
import collectionReducer from "./Collection/collection-reducer";
import listReducer from "./List/list-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {reducer as formReducer} from "redux-form"
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["list", "search"]
};

const rootReducer = combineReducers({
  movie: movieReducer,
  tv: TVReducer,
  user: userReducer,
  search: searchReducer,
  list: listReducer,
  collection: collectionReducer,
  form: formReducer
 

});

export default persistReducer(persistConfig, rootReducer);
