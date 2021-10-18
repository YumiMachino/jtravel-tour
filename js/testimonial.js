// testimonial indicators
const testi_left_arrow = document.querySelector(".left-arrow");
const testi_right_arrow = document.querySelector(".right-arrow");
const paginations = document.querySelectorAll(".pg");
const testiPages = document.querySelectorAll(".testimonials-page");
let index = 0;

testi_left_arrow.addEventListener("click", () => {
  index--;
  slideTesti();
});
testi_right_arrow.addEventListener("click", () => {
  index++;
  slideTesti();
});

// slide testimonial page
function slideTesti() {
  if (index < 0) {
    index = testiPages.length - 1;
  } else if (testiPages.length - 1 < index) {
    index = 0;
  }
  // remove open from
  testiPages.forEach((page) => {
    page.classList.remove("open");
  });
  paginations.forEach((pg) => {
    pg.classList.remove("open");
  });
  testiPages[index].classList.add("open");
  paginations[index].classList.add("open");
}
