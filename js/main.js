// all the modals, pick btns, modal close btns
const modals = document.querySelectorAll(".modal");
const pick_btns = document.querySelectorAll(".pick-btn");
const modal_close_btns = document.querySelectorAll(".modal-close");

// testimonial indicators
// const testi_left_arrow = document.querySelector(".left-arrow");
// const testi_right_arrow = document.querySelector(".right-arrow");
// const paginations = document.querySelectorAll(".pg");
// const testiPages = document.querySelectorAll(".testimonials-page");
// let index = 0;

// FAQ
// const faq_angle_down_arrows = document.querySelectorAll(".fa-angle-down");
// const faq_angle_up_arrows = document.querySelectorAll(".fa-angle-up");
// const faqs = document.querySelectorAll(".faq");

// Features
// const featureSections = document.querySelectorAll(".featured-section");
// const feature_left_arrow = document.querySelector(".f-left-arrow");
// const feature_right_arrow = document.querySelector(".f-right-arrow");

// const feature_num = document.querySelector(".slide-num");
// let featureInd = 0;

// console.log(feature_left_arrow);

// feature_left_arrow.addEventListener("click", () => {
//   featureInd--;
//   toggleFeatures();
// });

// feature_right_arrow.addEventListener("click", () => {
//   featureInd++;
//   toggleFeatures();
// });

// function toggleFeatures() {
//   // remove "show" from all features
//   featureSections.forEach((feature) => {
//     feature.classList.remove("show");
//   });

//   // check index
//   if (featureInd < 0) {
//     featureInd = featureSections.length - 1;
//   } else if (featureInd > featureSections.length - 1) {
//     featureInd = 0;
//   }
//   // add "show"
//   featureSections[featureInd].classList.add("show");
//   feature_num.innerText = featureInd + 1;
// }

// faq_angle_down_arrows.forEach((down_arrow) => {
//   down_arrow.addEventListener("click", (e) => {
//     console.log("clicked");
//     toggleFAQ(e);
//   });
// });

// faq_angle_up_arrows.forEach((up_arrow) => {
//   up_arrow.addEventListener("click", (e) => toggleFAQ(e));
// });

// function toggleFAQ(e) {
//   console.log("toggling");
//   const ele = e.target.parentElement.parentElement.parentElement;
//   ele.classList.toggle("active");
// }

// testi_left_arrow.addEventListener("click", () => {
//   index--;
//   slideTesti();
// });
// testi_right_arrow.addEventListener("click", () => {
//   index++;
//   slideTesti();
// });

// // slide testimonial page
// function slideTesti() {
//   if (index < 0) {
//     index = testiPages.length - 1;
//   } else if (testiPages.length - 1 < index) {
//     index = 0;
//   }
//   // remove open from
//   testiPages.forEach((page) => {
//     page.classList.remove("open");
//   });
//   paginations.forEach((pg) => {
//     pg.classList.remove("open");
//   });
//   testiPages[index].classList.add("open");
//   paginations[index].classList.add("open");
// }

// pick up card button
pick_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => openCloseModal(e.target.id, false));
});

// modal card close button
modal_close_btns.forEach((close) => {
  close.addEventListener("click", (e) => openCloseModal(e.target.id, true));
});

// close modal when window is clicked
window.addEventListener("click", (e) => closeModalFromWindow(e.target.id));

// toggle Modal by pick up card button and close button on modal
function openCloseModal(id, isOpen) {
  if (id.includes("1")) {
    isOpen
      ? (modals[0].style.display = "none")
      : (modals[0].style.display = "block");
  } else if (id.includes("2")) {
    isOpen
      ? (modals[1].style.display = "none")
      : (modals[1].style.display = "block");
  } else if (id.includes("3")) {
    isOpen
      ? (modals[2].style.display = "none")
      : (modals[2].style.display = "block");
  } else if (id.includes("4")) {
    isOpen
      ? (modals[3].style.display = "none")
      : (modals[3].style.display = "block");
  } else if (id.includes("5")) {
    isOpen
      ? (modals[4].style.display = "none")
      : (modals[4].style.display = "block");
  } else {
    console.log("no target found.");
  }
}

const modalTargets = ["modal-1", "modal-2", "modal-3", "modal-4", "modal-5"];
// close modal from window
function closeModalFromWindow(id) {
  if (modalTargets.includes(id)) {
    console.log("if statement", id.slice(-1));
    modals[id.slice(-1) - 1].style.display = "none";
  }
}

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
