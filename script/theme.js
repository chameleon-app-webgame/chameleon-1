document.addEventListener("DOMContentLoaded", () => {
  // === Назад кнопка ===
  const backBtn = document.getElementById("back-button");
  const backIcon = backBtn?.querySelector("img");
  const currentTheme = localStorage.getItem("theme") || "dark";

  if (backIcon) {
    backIcon.src = currentTheme === "dark" ? "img/back.png" : "img/back2.png";
  }

  // === Счётчики игроков и хамелеонов ===
  const playerCountEl = document.querySelector(".players-count");
  const chameleonCountEl = document.querySelector(".chameleons-count");

  const playerControls = document.querySelector(".contain2-1");
  const chameleonControls = document.querySelector(".contain2-2");

  let players = 3;
  let chameleons = 1;

  function updateUI() {
    playerCountEl.textContent = players;
    chameleonCountEl.textContent = chameleons;
  }

  // === Игроки ===
  playerControls.querySelector(".plus").addEventListener("click", () => {
    players++;
    updateUI();
  });

  playerControls.querySelector(".minus").addEventListener("click", () => {
    if (players > 3) {
      players--;
      if (chameleons >= players) {
        chameleons = players - 1;
        if (chameleons < 1) chameleons = 1;
      }
      updateUI();
    }
  });

  // === Хамелеоны ===
  chameleonControls.querySelector(".plus").addEventListener("click", () => {
    if (chameleons < players - 1) {
      chameleons++;
      updateUI();
    }
  });

  chameleonControls.querySelector(".minus").addEventListener("click", () => {
    if (chameleons > 1) {
      chameleons--;
      updateUI();
    }
  });

  // Первоначальное обновление UI
  updateUI();
});
