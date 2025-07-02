import sajoData from "./data.js";
const { telData, groupList } = sajoData;
const prev = document.querySelector(".arrow .xi-angle-left-thin");
const next = document.querySelector(".arrow .xi-angle-right-thin");
const visualLis = document.querySelectorAll("#visual .scroll li");
const grid_bg = document.querySelectorAll(".con.content4 li");
const telBtn = document.querySelector(".tel-btn");
const iClose = document.querySelector(".xi-close");
const telPopup = document.querySelector(".tel-popup");

let idx = 0;

const showSlide = (i) => {
  visualLis.forEach((li) => {
    li.classList.remove("show");
  });
  visualLis[i].classList.add("show");
};
setInterval(() => {
  idx = (idx + 1) % visualLis.length;
  showSlide(idx);
}, 5000);

showSlide(idx);
//슬라이드

grid_bg.forEach((item, idx) => {
  item.style.backgroundImage = `url('./images/grid0${idx + 1}_bg.jpg')`;
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
  item.addEventListener("mouseenter", (e) => {});
});
next.addEventListener("click", (e) => {});
prev.addEventListener("click", (e) => {});

document.addEventListener("DOMContentLoaded", () => {
  const telList = document.querySelector(".tel-popup ul");

  telData.forEach((item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = item.name;
    const p = document.createElement("p");
    p.textContent = item.phone;
    li.appendChild(span);
    li.appendChild(p);
    telList.appendChild(li);
  });
});

iClose.addEventListener("click", (e) => {
  telPopup.classList.remove("active");
});
telBtn.addEventListener("click", (e) => {
  telPopup.classList.add("active");
});
