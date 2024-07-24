const btnWrap = document.querySelector(".btn-wrap");
const tabBtn = document.querySelectorAll(".tab-btn");
const tabCont = document.querySelectorAll(".tab-content");

// tabBtn[0].addEventListener("click", function () {
//   tabBtn[0].classList.remove("blue");
//   tabBtn[1].classList.remove("blue");
//   tabBtn[2].classList.remove("blue");
//   tabBtn[0].classList.add("blue");
//   tabCont[0].classList.remove("show");
//   tabCont[1].classList.remove("show");
//   tabCont[2].classList.remove("show");
//   tabCont[0].classList.add("show");
// });

// tabBtn[1].addEventListener("click", function () {
//   tabBtn[0].classList.remove("blue");
//   tabBtn[1].classList.remove("blue");
//   tabBtn[2].classList.remove("blue");
//   tabBtn[1].classList.add("blue");
//   tabCont[0].classList.remove("show");
//   tabCont[1].classList.remove("show");
//   tabCont[2].classList.remove("show");
//   tabCont[1].classList.add("show");
// });

// tabBtn[2].addEventListener("click", function () {
//   tabBtn[0].classList.remove("blue");
//   tabBtn[1].classList.remove("blue");
//   tabBtn[2].classList.remove("blue");
//   tabBtn[2].classList.add("blue");
//   tabCont[0].classList.remove("show");
//   tabCont[1].classList.remove("show");
//   tabCont[2].classList.remove("show");
//   tabCont[2].classList.add("show");
// });

// 반복문 사용하여 코드 줄이기
for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener("click", function () {
    for (let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].classList.remove("blue");
    }
    tabBtn[i].classList.add("blue");
    for (let j = 0; j < tabCont.length; j++) {
      tabCont[j].classList.remove("show");
    }
    tabCont[i].classList.add("show");
  });
}
