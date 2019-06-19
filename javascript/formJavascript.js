"use strict";
window.addEventListener("DOMContentLoaded", init);

function init() {
  // eventlistener på "fb-but" og ".dantoto"
  document.querySelector(".dantoto").addEventListener("click", alertboks);
  document.querySelector(".fb-but").addEventListener("click", alertboks);
}

function alertboks() {
  alert(
    "OBS: This is a school project - it does not allow you to log in usinig this function"
  );
}
function sendEmail(email, subject, message, company, sendername) {
  const rawurl = "https://dantoto-7fd4.restdb.io/";
  let headers = {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "5ce54e1d780a473c8df5caec",
    "cache-control": "no-cache"
  };

  const theEmail = {
    to: email,
    subject: subject,
    html: message,
    company: company,
    sendername: sendername
  };
  let postData = JSON.stringify(theEmail);
  fetch(rawurl + "mail", {
    method: "post",
    headers: headers,
    body: postData
  })
    .then(d => d.json())
    .then(data => {
      console.log(data);
      if (data.result && data.result[0].email_outbound_id) {
        //email scheduled to be sent
        console.log("maybe it sent an email");
        visModal();
      } else {
        //something went wrong
        visModal_wrong();
        console.log("something is wrong");
      }
    });
}
sendEmail(
  "mille@scenit.dk",
  "Velokommen til DK spil",
  `<p>Måske kan de klare html</p>
  <ul>
    <li>Det</li>
    <li>ser vi snart</li>
  </ul>`,
  "Danske Spil",
  "No Reply"
);

let modal;
//MODAL
function visModal() {
  modal = document.querySelector("#modalen");
  modal.classList.add("vis");
  document.querySelector(".modal__featured").style.display = "none";
  document.querySelector(".button").style.display = "none";
}
//MODAL WRONG
function visModal_wrong() {
  modal = document.querySelector("#modalen_wrong");
  modal.classList.add("vis");
  document.querySelector(".modal__featured").style.display = "none";
  modal.querySelector(".luk").addEventListener("click", skjulModal);
  document.querySelector(".button").style.display = "none";
}

function skjulModal() {
  modal.classList.remove("vis");
  document.querySelector(".button").style.display = "block";
}
