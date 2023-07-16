var React = require("react");
var ReactDom = require("react-dom");

// ReactDom.render(
//   <div>
//     <h1>This is my first react app</h1>
//     <p>This is gonna be a awesome experience.</p>
//   </div>,
//   document.getElementById("root")
// );
var num = 0;
let increaseCounter = () => {
  num = num + 1;
  document.querySelector("h1").innerHTML = num;
};

var btn = document.getElementById("btn");
btn.addEventListener("click", increaseCounter);
