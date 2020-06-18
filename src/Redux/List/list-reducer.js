// import ListActionTypes from "./list-types";
// import { addItemToList, removeItemFromList } from "./list-utils";

// const INITIAL_STATE = {
//   listItems: []
// };

// const listReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ListActionTypes.ADD_ITEM:
//       return {
//         ...state,
//         listItems: addItemToList(state.listItems, action.payload)
//       };
//     case ListActionTypes.REMOVE_ITEM:
//       return {
//         ...state,
//         listItems: removeItemFromList(state.listItems, action.payload)
//       };
//     default:
//       return state;
//   }
// };

// export default listReducer;



/////Reducer is a pure function that means it does not mutate actual argument that it get and for same input giving same out-put....and it will take two parameter first is InitialState and Action
import ListActionTypes from './list-types'
import { addItemToList, removeItemFromList } from './list-utils'

const INITIAL_STATE = {
  listItems:[]
}
//how action is available as argument here
const listReducer = (state = INITIAL_STATE, action) => {
  const {type,payload}=action
  switch(type)
  {
case ListActionTypes.ADD_ITEM:
return {
  ...state,
  listItems:addItemToList(state.listItems,payload)
}
case ListActionTypes.REMOVE_ITEM:
return {
  ...state,
  listItems:removeItemFromList(state.listItems,payload)
}
default: return state


  }

}
export default listReducer