// all the modals
const modals = document.querySelectorAll(".modal");
// all pick btns
const pick_btns = document.querySelectorAll(".pick-btn");
// all the modal close btns
const modal_close_btns = document.querySelectorAll(".modal-close");

// pick_btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const target = e.target.id;
//     switch (target) {
//       case "pick-1-btn":
//         modals[0].style.display = "block";
//         break;
//       case "pick-2-btn":
//         modals[1].style.display = "block";
//         break;
//       case "pick-3-btn":
//         modals[2].style.display = "block";
//         break;
//       case "pick-4-btn":
//         modals[3].style.display = "block";
//         break;
//       case "pick-5-btn":
//         modals[4].style.display = "block";
//         break;
//       default:
//         console.log("nothing applied");
//     }
//   });
// });

// modal_close_btns.forEach((close) => {
//   close.addEventListener("click", (e) => {
//     const target = e.target.id;
//     switch (target) {
//       case "modal-close-1":
//         modals[0].style.display = "none";
//         break;
//       case "modal-close-2":
//         modals[1].style.display = "none";
//         break;
//       case "modal-close-3":
//         modals[2].style.display = "none";
//         break;
//       case "modal-close-4":
//         modals[3].style.display = "none";
//         break;
//       case "modal-close-5":
//         modals[4].style.display = "none";
//         break;
//       default:
//         console.log("nothing applied");
//     }
//   });
// });

const eleBtn = document.getElementById("pick-1-btn");
const ele = document.getElementById("modal-1");

eleBtn.addEventListener("click", (e) => openCloseModal(e.target.id, false));
ele.addEventListener("click", (e) => openCloseModal(e.target.id, true));

function openCloseModal(id, isOpen) {
  if (id.includes("1")) {
    console.log("if 内");
    isOpen
      ? (modals[0].style.display = "none")
      : (modals[0].style.display = "block");
  }
  console.log("aaaa");
  console.log(id, isOpen);
}

// when user clicks on window outside of modal, close
// window.onclick = function (e) {
//   switch (e.target.id) {
//     case "modal-1":
//       modals[0].style.display = "none";
//     case "modal-2":
//       modals[1].style.display = "none";
//     case "modal-3":
//       modals[2].style.display = "none";
//     case "modal-4":
//       modals[3].style.display = "none";
//     case "modal-5":
//       modals[4].style.display = "none";
//     default:
//       console.log("nothing applied");
//   }
// };

// forEach全てにeventslidterつける、関数はopenCloseMModalで引数を渡すこと。
