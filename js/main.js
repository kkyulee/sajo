import sajoData from "./data.js";
const { telData, groupList } = sajoData;
const prev = document.querySelector(".arrow .xi-angle-left-thin");
const next = document.querySelector(".arrow .xi-angle-right-thin");
const visualLis = document.querySelectorAll("#visual .scroll li");
const grid_bg = document.querySelectorAll(".con.content4 li");
const telBtn = document.querySelector(".tel-btn");
const iClose = document.querySelector(".xi-close");
const telPopup = document.querySelector(".tel-popup");
const pagination = document.querySelector(".pagination");

let idx = 0;
const visualtotal = visualLis.length;
for (let i = 0; i < visualtotal; i++) {
  const pageBtn = document.createElement("span");
  pageBtn.classList.add("pageBtn");
  pagination.appendChild(pageBtn);
}

const pageBtns = document.querySelectorAll(".pagination .pageBtn");
const updateBtn = (idx) => {
  pageBtns.forEach((btn, i) => {
    btn.classList.remove("color");
    if (i === idx) btn.classList.add("color");
  });
};
pageBtns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    updateBtn(idx);
    showSlide(idx);
  });
});
const showSlide = (idx) => {
  visualLis.forEach((li) => {
    li.classList.remove("show");
  });
  visualLis[idx].classList.add("show");
  updateBtn(idx);
};
setInterval(() => {
  idx = (idx + 1) % visualLis.length;
  showSlide(idx);
  updateBtn(idx);
}, 5000);

//슬라이드
next.addEventListener("click", () => {
  idx = (idx + 1) % visualLis.length;
  showSlide(idx);
  updateBtn(idx);
});
prev.addEventListener("click", (e) => {
  idx = (idx - 1 + visualLis.length) % visualLis.length;
  showSlide(idx);
  updateBtn(idx);
});
showSlide(idx);

//visual
grid_bg.forEach((item, idx) => {
  item.style.backgroundImage = `url('./images/grid0${idx + 1}_bg.jpg')`;
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
  item.addEventListener("mouseenter", (e) => {});
});

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
