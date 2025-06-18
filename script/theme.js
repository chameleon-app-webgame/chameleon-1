document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-button");
  const backIcon = backBtn?.querySelector("img");

  const currentTheme = localStorage.getItem("theme") || "dark";

  // Меняем иконку кнопки "назад" в зависимости от темы
  if (backIcon) {
    backIcon.src = currentTheme === "dark" ? "img/back.png" : "img/back2.png";
  }

  const numberEl = document.getElementById("number");
    const plusBtn = document.getElementById("plus");
    const minusBtn = document.getElementById("minus");

    let count = 0;

    plusBtn.addEventListener("click", () => {
      count++;
      numberEl.textContent = count;
    });

    minusBtn.addEventListener("click", () => {
      count--;
      numberEl.textContent = count;
    });

});
