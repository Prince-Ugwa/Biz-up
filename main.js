// const p1 = ["p>E", "E>R", "R>U"];
// const p2 = p1.join("").replaceAll(">", "");
// const peru = new Set(p2);
// const s = ["i>n", "a>i", "p>a", "s>p"];
// const s1 = s.join("").replaceAll(">", "").toUpperCase();
// const s2 = new Set(s1);
// const s3 = [...s2].reverse();
// [s3[3], s3[4]] = [s3[4], s3[3]];
// console.log([...peru].join("").toUpperCase(), s3);

// // console.log(p3.toUpperCase());
////////////////////////////////////////////////

const header = document.querySelector("nav");
const featureBtn = document.querySelector(".features");
const btn1 = document.querySelector(".btn1");

//////////////////ACCORDION SELECTION///////////////////
const accordionFag = document.querySelectorAll(".accordion-faq");
const qna = document.querySelectorAll(".QNA");

//////////////////MODAL SELECTION//////////////////////
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn-close-modal");
const btnOpenModal = document.querySelectorAll(".btn-open-modal");
const search = document.querySelector(".search");

//////////////////CHANGING HEADER BG ON SCROLL/////////////////////////
window.addEventListener("scroll", () => {
  header.classList.toggle("window-scroll", window.scrollY > 50);
});

//////////////////TESTING A SMOOTH SCROLL ON HERON BTN1/////////////////////////
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  featureBtn.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////Accordion/////////////////////////////////

// accordionFag.forEach((faq) => {
//   faq.addEventListener("click", function (e) {
//     faq.classList.toggle("open");
//   });
// });

qna.forEach((view) => {
  view.addEventListener("click", () => {
    if (view.parentElement.classList.contains("open")) {
      view.parentElement.classList.toggle("open");
    } else {
      document
        .querySelectorAll(".QNA")
        .forEach((view) => view.parentElement.classList.remove("open"));
      view.parentElement.classList.add("open");
    }
  });
});
////////////////////////MODAL STARTS HERE//////////////////////////////
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
search.addEventListener("click", () => alert("COMING SOON 😍😍😍"));
/////////////////////////////////////////////////////////////////////////
