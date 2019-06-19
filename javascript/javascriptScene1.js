"use strict";
window.addEventListener("DOMContentLoaded", init);

let hesteTemplate = document.querySelector("#heste-template");
let hesteContainer = document.querySelector(".data-container");
let heste;
let penge;
let oddset = 0;
let calc = 0;

function init() {
  document.querySelector(".next1").addEventListener("click", () => {
    document.querySelector(".faktaboks1").style.display = "none";
    document.querySelector(".faktaboks2").style.display = "block";
  });
  document.querySelector(".next2").addEventListener("click", () => {
    document.querySelector(".faktaboks2").style.display = "none";
    document.querySelector(".faktaboks3").style.display = "block";
  });
  document.querySelector(".lukbox").addEventListener("click", () => {
    document.querySelector(".faktaboks3").style.display = "none";
  });
  if (!localStorage.getItem("gevinst")) {
    localStorage.setItem("gevinst", 100);
  }
  document.querySelector(".kr").textContent =
    localStorage.getItem("gevinst") + " kr.";
  document.querySelector("#knap").addEventListener("click", () => {
    visModal();
  });

  LoadJSON();
}

// Hent JSON
async function LoadJSON() {
  let jsonData = await fetch("heste.json");
  heste = await jsonData.json();
  console.log(heste);
  visHestePage();
}
// Viser og kloner
function visHestePage() {
  heste.forEach(hest => {
    let klon = hesteTemplate.cloneNode(true).content;
    klon.querySelector(".data-hestenavn").textContent = hest.Hestens_navn;
    klon.querySelector(".data-jockeynavn").textContent = hest.Jockeys_navn;
    klon.querySelector(".data-beskrivelse").textContent = hest.Beskrivelse;
    klon.querySelector(".more").addEventListener("click", aaben);
    klon.querySelector(".data-id").textContent = hest.id;
    klon.querySelector(".data-odds").textContent = "Odds:" + " " + hest.Odds;

    klon.querySelector(".choose").dataset.odds = hest.Odds;
    klon.querySelector(".choose").dataset.hest = hest.Hestens_navn;

    klon.querySelector(".data-billede").src = hest.img;
    hesteContainer.appendChild(klon);
  });
  regnSaldo();
}

//Åben/luk infobox

//E er der for at tage det element. Så det tager det "element som er target"
function aaben(e) {
  console.log(e.target.parentElement.nextElementSibling);
  e.target.parentElement.nextElementSibling.style.display = "block";
  e.target.textContent = "︿";
  e.target.addEventListener("click", luk);
}
function luk(e) {
  e.target.parentElement.nextElementSibling.style.display = "";
  e.target.textContent = "﹀";
}

//BEREGN SALDO
function regnSaldo() {
  document.querySelector(".tyve").addEventListener("click", setcalc => {
    calc = 20;
    regn();
  });
  document.querySelector(".ethund").addEventListener("click", setcalc => {
    calc = 100;
    regn();
  });
  document.querySelector(".tohund").addEventListener("click", setcalc => {
    calc = 200;
    regn();
  });
  document.querySelector(".halvtreds").addEventListener("click", setcalc => {
    calc = 50;
    regn();
  });
}

function regn() {
  penge = localStorage.getItem("gevinst") - calc;
  document.querySelector(".kr").textContent = penge;
  console.log(penge);
  setOdds();
}

//BEREGN GEVINST
function setOdds() {
  document.querySelectorAll(".choose").forEach(each => {
    each.addEventListener("click", setodds => {
      const checkbox = setodds.target;
      console.log(checkbox);
      oddset = checkbox.dataset.odds;
      console.log(oddset);
      regnGevinst();
    });
  });
}

function regnGevinst() {
  let gevinst = calc * oddset;
  console.log(calc, oddset);
  document.querySelector(".gevinst").textContent = gevinst;
  let gevinsten = gevinst + penge;

  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem("gevinst", gevinsten);
  }
}

//MODAL
function visModal() {
  let modal = document.querySelector("#modal");
  modal.classList.add("vis");
  modal.querySelector(".luk").addEventListener("click", skjulModal);
  document.querySelector("#knap").style.display = "none";
}
function skjulModal() {
  modal.classList.remove("vis");
  document.querySelector("#knap").style.display = "block";
}
