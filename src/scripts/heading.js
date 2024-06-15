let theme_toggler = document.querySelector("#theme-toggler");

theme_toggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
