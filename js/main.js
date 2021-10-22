// all the modals, pick btns, modal close btns
const modals = document.querySelectorAll(".modal");
const pick_btns = document.querySelectorAll(".pick-btn");
const modal_close_btns = document.querySelectorAll(".modal-close");

// pick up card button
pick_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.id);
    const _Index = Number(e.target.id.split("-")[1]) - 1;
    modals[_Index].style.display = "block";
  });
});

// modal card close button
modal_close_btns.forEach((close) => {
  close.addEventListener("click", (e) => {
    const _Index = Number(e.target.id.split("-")[2]) - 1;
    modals[_Index].style.display = "none";
  });
});

window.onclick = function (e) {
  if (e.target.className === "modal") {
    console.log("this is from windown");
    const _Index = Number(e.target.id.split("-")[1]) - 1;
    modals[_Index].style.display = "none";
  } else {
    return;
  }
};

// Swiper for interest cards
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// const m = document.querySelectorAll(".fa-chevron-down");
// console.log(m);

// m.forEach((m) => {
//   m.addEventListener("click", (e) => {
//     console.log("clicked");
//     const ele = e.target.parentElement.classList.toggle("open");
//   });
// });
