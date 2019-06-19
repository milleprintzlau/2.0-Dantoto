"use strict";
window.addEventListener("DOMContentLoaded", init);

let currentPosition = 0;
let speed = Math.random() * 5 + 1;
let hest1;
let curve1;
let hest2;
let curve2;
let hest3;
let curve3;
let hest4;
let curve4;
let hest5;
let curve5;

function init() {
  hest1 = document.querySelector("#hest1");
  curve1 = document.querySelector("#curve1");
  hest2 = document.querySelector("#hest2");
  curve2 = document.querySelector("#curve2");
  hest3 = document.querySelector("#hest3");
  curve3 = document.querySelector("#curve3");
  hest4 = document.querySelector("#hest4");
  curve4 = document.querySelector("#curve4");
  hest5 = document.querySelector("#hest5");
  curve5 = document.querySelector("#curve5");
  document.querySelector(".go").onclick = function() {
    count();
    play();
  };
  //runAnimation();
}

function runAnimation() {
  console.log("animate");
  console.log(speed);

  // MAKE SURE THE ANIMATION LOOPS (EVERY TIME)
  if (currentPosition < curve1.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  } else if (currentPosition < curve2.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  } else if (currentPosition < curve3.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  } else if (currentPosition < curve4.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  } else if (currentPosition < curve5.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  }

  // TODO: Build animation ...

  // CHANGE THE X POSITION
  currentPosition += speed;

  const pos = curve1.getPointAtLength(currentPosition);
  const pos2 = curve2.getPointAtLength(currentPosition);
  const pos3 = curve3.getPointAtLength(currentPosition);
  const pos4 = curve4.getPointAtLength(currentPosition);
  const pos5 = curve5.getPointAtLength(currentPosition);
  console.log(pos);

  //MOVE THE HORSE TO NEW POSITION

  hest1.style.transform = `translate( ${pos.x}px, ${pos.y}px)`;
  hest2.style.transform = `translate( ${pos2.x}px, ${pos2.y}px)`;
  hest3.style.transform = `translate( ${pos3.x}px, ${pos3.y}px)`;
  hest4.style.transform = `translate( ${pos4.x}px, ${pos4.y}px)`;
  hest5.style.transform = `translate( ${pos5.x}px, ${pos5.y}px)`;

  if (currentPosition > curve5.getTotalLength()) {
    redirect();
  }
}

function redirect() {
  setTimeout(function() {
    window.location.href = "goal.html";
  }, 2000);
}

//COUNTDOWN
function count() {
  document.querySelector(".countdown").classList.add("counting");
  document.querySelector(".go").style.opacity = "0";
  setTimeout(function() {
    runAnimation();
  }, 4000);
}
let audio;
//AUDIO
function play() {
  document.querySelector("#Kuglerne").style.display = "block";
  let audio = document.querySelector(".lyd");
  audio.play();
}
