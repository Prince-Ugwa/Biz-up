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
/////////////////////////////////////////////////////////////////////////
const scrollToTop = document.querySelector(".scroll-to-top");
// const header = document.querySelector("nav");
const nav = document.querySelector(".nav");
const featureBtn = document.querySelector(".features");
const btn1 = document.querySelector(".btn1");
//////////////////ACCORDION SELECTION//////////////////////////////////
const accordionFag = document.querySelectorAll(".accordion-faq");
const qna = document.querySelectorAll(".QNA");

//////////////////MODAL SELECTION/////////////////////////////////////
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn-close-modal");
const btnOpenModal = document.querySelectorAll(".btn-open-modal");
const search = document.querySelector(".search");
const section1 = document.querySelector("#section-1");

////////////////////////////////////////////////////////////////////////////////////////
/////////////////SCROLL TO  TOP////////////////////////
const scrollPageToTop = function () {
  if (window.pageYOffset > 700) {
    scrollToTop.style.display = "block";
  } else scrollToTop.style.display = "none";
};
const scrollTopFx = function () {
  window.addEventListener("scroll", scrollPageToTop);
};
scrollTopFx();

scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//////////////////CHANGING HEADER BG ON SCROLL / STICKY /////////////////////////
window.addEventListener("scroll", () => {
  nav.classList.toggle("window-scroll", window.scrollY > 50);
});
// const getCoord = section1.getBoundingClientRect();
// // console.log(getCoord);
// window.addEventListener("scroll", () => {
//   if (window.scrollY > getCoord.top) nav.classList.add("window-scroll");
//   else nav.classList.remove("window-scroll");
// });
////////////////////////fade animation//////////////////////////////////
nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".nav-link");
    const logo = link.closest(".nav").querySelector("img");

    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = 0.8;
    });
    logo.style.opacity = 0.8;
  }
});
nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".nav-link");
    const logo = link.closest(".nav").querySelector("img");

    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

//////////////////TESTING A SMOOTH SCROLL ON HERON BTN1/////////////////
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  featureBtn.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////////ACCORDION/////////////////////////////////

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
      // document;
      // .querySelectorAll(".QNA")
      qna.forEach((view) => view.parentElement.classList.remove("open"));
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

////////////////////////REVEAL SECTION////////////////////////////////
const allSection = document.querySelectorAll("section");

const sectionReveal = function (entries, obs) {
  const [entry] = entries;

  //GUARD CLAUSE
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  obs.unobserve(entry.target);
};
const sectionObs = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.3,
});

allSection.forEach(function (section) {
  sectionObs.observe(section);
  section.classList.add("section-hidden");
});
////////////////////////////////////////////////////////////////////////

////////////////////////SLIDEING COMPONENTS////////////////////////////////////
const slideerComponent = function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // slider.style.transform = "scale(0.4) translateX(-800px)";
  // slider.style.overflow = "visible";
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // 0%,100%,200%,300%

  // //Making the slide go to right
  // btnRight.addEventListener("click", function () {
  //   if (curSlide === maxSlide) {
  //     curSlide = 0;
  //   } else {
  //     curSlide++;
  //   }
  //   slides.forEach(function (starts, index) {
  //     starts.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  //   });
  // });

  // //Making the slide go to left
  // btnLeft.addEventListener("click", function () {
  //   if (curSlide === 0) {
  //     curSlide - maxSlide - 1;
  //   } else {
  //     curSlide--;
  //   }
  //   slides.forEach(function (starts, index) {
  //     starts.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  //   });
  // });
  //////////////////////////////////////////////////////////////////////////////
  //CREATING THE DOTS
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`
      );
    });
  };
  createDots();

  const activeDot = function (slid) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slid}"]`)
      .classList.add("dots__dot--active");
  };
  activeDot(0);

  ////////////////////////////////////////////////////////////////
  const slidings = function (slide) {
    //call the slides container above
    slides.forEach(function (slideEl, index) {
      slideEl.style.transform = `translateX(${100 * (index - slide)}%)`;
    });
  };
  slidings(0);

  //MAKING THE SLIDES GO RIGHT
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    slidings(curSlide);
    activeDot(curSlide);
  };

  //MAKING THE SLIDES GO LEFT
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    slidings(curSlide);
    activeDot(curSlide);
  };

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  ////ARROW KEY FUNCTION
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  ///makind the dots clickable
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = e.target.dataset.slide;
      slidings(slide);
      activeDot(slide); //indicate current slide
    }
  });
};
slideerComponent();
