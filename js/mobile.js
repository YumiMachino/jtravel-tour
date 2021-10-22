const dropDownBtns = document.querySelectorAll(".fa-chevron-down");

dropDownBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const ele = e.target.parentElement.classList.toggle("open");
  });
});
