// Initialize the console log2div first.
import { initLog2Div, toggleLog2DivVisibility } from './log2div.js';
(() => { initLog2Div(); })();

/**
 * Show or hide the console.
 * 
 * @param {KeyboardEvent} event The event to show/hide the console.
 */
async function showConsole(event) {
  // CTRL-D shows the console.
  if ((event.code == "KeyD") && (event.ctrlKey)) { toggleLog2DivVisibility(); }
}

/**
 * Toggle the console.
 */
function toggleConsole() {
  toggleLog2DivVisibility();
}

/**
 * Log a message based on the log text input and log level.
 */
function logMessage() {
  let text = document.getElementById('log')["value"];
  let loglevel = document.getElementById("loglevel")["value"];
  
  switch (loglevel) {
    case "info": console.log(text); break;
    case "warn": console.warn(text); break;
    case "error": console.error(text); break;
  }
}

(() => {
  // Test console message.
  console.log("This is %i %s", 1, "log message.");
  console.log("This is %ca red message", "color: red;");
  console.log("This is %ca %s message", "color: red;", "red");
  console.log("This message is repeated");
  console.log("This message is repeated");
  console.log("This message is repeated");
  console.log("This is %ca red message %cand this is blue", "color: red; font-size: 20px;", "color: blue; font-size: 15px;");
  console.error("This message is repeated");
  console.error("This message is repeated");
  console.log("This is a long message with some Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio tempor. More lorem ispsum goes here if we need it to be here.");

  window.addEventListener("keydown", showConsole, false);

  let toggleButton = document.getElementById('toggleconsole');
  toggleButton.addEventListener("click", toggleConsole);
  
  let logButton = document.getElementById('logmessage');
  logButton.addEventListener("click", logMessage);
})();
