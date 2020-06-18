import { createSelector } from 'reselect';
//Reselect is a memoized selector function, composed of selectors, that returns something you want in your component’s props.createSelector is a function. First argument, selectors. Second argument is a function called with the selectors as arguments.
//In Redux, whenever an action is called anywhere in the application, all mounted & connected components call their mapStateToProps function. This is why Reselect is awesome. It will just return the memoized result if nothing has changed.

const selectList = state => state.list;

export const selectListItems = createSelector(
  [selectList],
  list => list.listItems
);

export const selectListMovieByTitle = (id) => createSelector(
  [selectListItems],
  listItems => listItems.filter(items => items.title ? (items.id === id) : null)
);

export const selectListTVShowByTitle = (id) => createSelector(
  [selectListItems],
  listItems => listItems.filter(items => items.name ? (items.id === id) : null)
);

// import {createSelector} from 'reselect'
// const selectList = state => state.list 
// export const selectListItems = createSelector(
//   [selectList],
//   list => list.listItems
// )
// export const selectListMovieByTitle = (id) => createSelector(
//   [selectListItems],
//   listItems =>listItems.filter(items =>items.title ? (items.id === id) : null)
// )

// export const selectListTVShowByTitle = (id) => createSelector(
//   [selectListItems],
//   listItems => listItems.filter(items => items.name ? (items.id===id) : null)
// )


