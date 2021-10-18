// FAQ
const faq_angle_down_arrows = document.querySelectorAll(".fa-angle-down");
const faq_angle_up_arrows = document.querySelectorAll(".fa-angle-up");
const faqs = document.querySelectorAll(".faq");

faq_angle_down_arrows.forEach((down_arrow) => {
  down_arrow.addEventListener("click", (e) => {
    console.log("clicked");
    toggleFAQ(e);
  });
});

faq_angle_up_arrows.forEach((up_arrow) => {
  up_arrow.addEventListener("click", (e) => toggleFAQ(e));
});

function toggleFAQ(e) {
  const ele = e.target.parentElement.parentElement.parentElement;
  ele.classList.toggle("active");
}
