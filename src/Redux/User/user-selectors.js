// import { createSelector } from 'reselect';

// const selectUser = state => state.user;

// export const selectCurrentUser = createSelector(
//   [selectUser],
//   user => user.currentUser
// );

// export const selectToggleHidden = createSelector(
//   [selectUser],
//   user => user.hidden
// );

//A “selector” is simply a function that accepts Redux state as an argument and returns data that is derived from that state.


import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectToggleHidden = createSelector(
  [selectUser],
  user => user.hidden
);