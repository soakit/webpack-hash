import commonJs from "./common";
console.log(commonJs());

import("./chunk0").then((add) => {
  console.log(add(1, 2));
});

import("./chunk1").then((flow) => {
  console.log(flow());
});
