// Features
const featureSections = document.querySelectorAll(".featured-section");
const feature_left_arrow = document.querySelector(".f-left-arrow");
const feature_right_arrow = document.querySelector(".f-right-arrow");

const feature_num = document.querySelector(".slide-num");
let featureInd = 0;

feature_left_arrow.addEventListener("click", () => {
  featureInd--;
  toggleFeatures();
});

feature_right_arrow.addEventListener("click", () => {
  featureInd++;
  toggleFeatures();
});

function toggleFeatures() {
  // remove "show" from all features
  featureSections.forEach((feature) => {
    feature.classList.remove("show");
  });

  // check index
  if (featureInd < 0) {
    featureInd = featureSections.length - 1;
  } else if (featureInd > featureSections.length - 1) {
    featureInd = 0;
  }
  // add "show"
  featureSections[featureInd].classList.add("show");
  feature_num.innerText = featureInd + 1;
}
