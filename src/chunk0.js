import "./chunk0.css";

import("./common").then((commonJs) => {
  console.log(commonJs());
});

export default function add(a, b) {
  return a + b;
}
