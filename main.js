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

const header = document.querySelector("nav");
const fe = document.querySelector(".features");
const btn1 = document.querySelector(".btn1");

window.addEventListener("scroll", () => {
  header.classList.toggle("window-scroll", window.scrollY > 50);
});

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  fe.scrollIntoView({ behavior: "smooth" });
});
