// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

;("use strict")

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-01/sw.js", {
    scope: "/ICS2O-Unit-5-01/",
  })
}

/**
 * This function compares slider with random number.
 */
function myButtonClicked() {
  const userInteger = parseInt(document.getElementById("user-integer").value);
  
  // process
  if (userInteger < 0) {
    document.getElementById("answers").innerHTML =
      "Integer is a negative number.";
  } else {
    document.getElementById("answers").innerHTML =
      "Integer is a positive number.";
  }
}