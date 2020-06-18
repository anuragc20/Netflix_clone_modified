// import { createSelector } from 'reselect';

// const selectCollection = state => state.collection;

// export const selectCollectionData = createSelector(
//   [selectCollection],
//   collection => collection.collection
// );
//i need to discuss with ashok
// import { createSelector } from 'reselect'
// const selectCollection = state => state.collection
// export const selectCollectionData = createSelector(
//   [selectCollection],
//   collection => collection.collection
// )
import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectCollectionData = createSelector(
  [selectCollection],
  collection => collection.collection
);