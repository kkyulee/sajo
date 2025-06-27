import sajoData from "./data.js";
const { telData, groupList } = sajoData;
const grid_bg = document.querySelectorAll(".con.content4 li");
const telBtn = document.querySelector(".tel-btn");
const siteBtn = document.querySelector(".site-btn");
const iClose = document.querySelector(".xi-close");
const telPopup = document.querySelector(".tel-popup");

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
  telPopup.style.display = "none";
});
telBtn.addEventListener('click',(e)=>{
    telPopup.style.display = "block";

})