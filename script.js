document.addEventListener("DOMContentLoaded", () => {

  const continueBtn = document.querySelector(".continue-btn");
  const introLayer = document.querySelector(".layer-intro");

  continueBtn.addEventListener("click", () => {
    // fade out intro
    introLayer.style.opacity = "0";

    setTimeout(() => {
      introLayer.style.display = "none";

      // TEMP: show alert for now
      alert("Layer 2 will start here (Book pages).");

    }, 600);
  });

});
