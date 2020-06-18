// import $ from "jquery";

// export const LeftGridArrow = node => {
//   var move = node.current;
//   var width = window.innerWidth;
//   var pixelWidth = width + "px";
//   console.log(pixelWidth);
//   $(move).animate(
//     {
//       scrollLeft: "-=" + pixelWidth
//     },
//     "slow"
//   );
// };

// export const RightGridArrow = node => {
//   var move = node.current;
//   var width = window.innerWidth;
//   var pixelWidth = width + "px";
//   $(move).animate(
//     {
//       scrollLeft: "+=" + pixelWidth
//     },
//     "slow"
//   );
// };

//this part is used for moving the grid left or right means providing carousel effect



// import $ from "jquery";

// export const LeftGridArrow = node => {
//   var move = node.current;
//   var width = window.innerWidth;
//   var pixelWidth = width + "px";
//   // console.log(pixelWidth);
//   setInterval(() => {
//     $(move).animate(
//       {
//         scrollLeft: "-=" + pixelWidth
//       },
//       "slow"
//     );
//   }, 2000);
  
// };

// export const RightGridArrow = node => {
//   var move = node.current;
//   var width = window.innerWidth;
//   var pixelWidth = width + "px";
//   setInterval(() => {
//     $(move).animate(
//       {
//         scrollLeft: "+=" + pixelWidth
//       },
//       "slow"
//     );
//   }, 2000);
 
// };

import $ from "jquery";

export const LeftGridArrow = node => {
  var move = node.current;
  var width = window.innerWidth;
  var pixelWidth = width + "px";
  console.log(pixelWidth);
  $(move).animate(
    {
      scrollLeft: "-=" + pixelWidth
    },
    "slow"
  );
};

export const RightGridArrow = node => {
  var move = node.current;
  var width = window.innerWidth;
  var pixelWidth = width + "px";
  $(move).animate(
    {
      scrollLeft: "+=" + pixelWidth
    },
    "slow"
  );
};
