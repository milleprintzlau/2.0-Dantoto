X_FRAME_OPTIONS = "ALLOW";

("use strict");

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector(".gevinsten").innerHTML = localStorage.getItem(
    "gevinst"
  );
  document.querySelector(".igen").onclick = function() {
    location.href = "scene_1.html";
  };

  document.querySelector(".dantoto").onclick = function() {
    location.href =
      "https://danskespil.dk/dantoto?utm_source=google&utm_medium=cpc&utm_campaign=dli_dan_ppc_brand";
  };
}
