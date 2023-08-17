//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const curTime = new Date();
let time = curTime.getHours();
let session = "AM";
let message = "";
let colorChange = "";

if (time === 0) {
  time = 12;
}
if (time > 12) {
  time = time - 12;
  session = "PM";
}

if (time >= 0 && time <= 12 && session === "AM") {
  message = "Good Morning";
  colorChange = "red";
} else if (time >= 0 && time <= 6 && session === "PM") {
  message = "Good Afternoon";
  colorChange = "green";
} else {
  message = "Good Evening";
  colorChange = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={{ color: colorChange }}>
    {message}
  </h1>,
  document.getElementById("root")
);
