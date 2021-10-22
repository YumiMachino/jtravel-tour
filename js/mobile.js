const m = document.querySelectorAll(".fa-chevron-down");
console.log(m);

m.forEach((m) => {
  m.addEventListener("click", (e) => {
    console.log("clicked");
    const ele = e.target.parentElement.classList.toggle("open");
  });
});
