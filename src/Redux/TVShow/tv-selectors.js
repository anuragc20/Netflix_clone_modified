// import { createSelector } from 'reselect';
// import {FixString} from '../../Utils/FixString';

// const selectTV = state => state.tv;

// export const selectTVItems = createSelector(
//   [selectTV],
//   tv => tv.tvItems
// );

// export const selectTVGridItems = createSelector(
//   [selectTV],
//   tv => tv.tvGridItems
// );

// export const selectTVCast = createSelector(
//   [selectTV],
//   tv => tv.tvCast
// );

// export const selectTVVideos = createSelector(
//   [selectTV],
//   tv => tv.tvVideos
// );

// export const selectIsTVFetching = createSelector(
//   [selectTV],
//   tv => tv.isFetching
// );

// export const selectTVByTitle = params => createSelector(
//   [selectTVItems],
//   tvItems => tvItems.filter(items => FixString(items.name) === params)
// );


import { createSelector } from 'reselect';//createSelector is used for memoizing previous calculation based on state and previous argument provided to createSelector and if arguments are same for in future then createSelector doesn't Get executed again and fetching cached result...(that we are telling memoized technique)...thanks
import {FixString} from '../../Utils/FixString';

const selectTV = state => state.tv;

export const selectTVItems = createSelector(
  [selectTV],
  tv => tv.tvItems
);

export const selectTVGridItems = createSelector(
  [selectTV],
  tv => tv.tvGridItems
);

export const selectTVCast = createSelector(
  [selectTV],
  tv => tv.tvCast
);

export const selectTVVideos = createSelector(
  [selectTV],
  tv => tv.tvVideos
);

export const selectIsTVFetching = createSelector(
  [selectTV],
  tv => tv.isFetching
);

export const selectTVByTitle = params => createSelector(
  [selectTVItems],
  tvItems => tvItems.filter(items => FixString(items.name) === params)
);
