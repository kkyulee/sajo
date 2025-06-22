const menu = document.querySelector(".header .right .menu i");
const lang = document.querySelector(".header .right .lang");
const depth2 = document.querySelectorAll(".header .depth1 .depth2");
const gnbLis = document.querySelectorAll(".header .gnb .depth1");
const depthBg = document.querySelector(".header-wrap .depth-bg");

let cnt = 0;
const open = () => {
  depth2.forEach((el) => {
    el.style.display = "block";
    el.classList.add("open");
  });
  depthBg.style.display = "block";
  if (menu.classList.contains("xi-bars")) {
    menu.classList.remove("xi-bars");
    menu.classList.add("xi-close");
  }
};
const close = () => {
  depth2.forEach((el) => {
    el.style.display = "none";
    el.classList.remove("open");
  });
  if (menu.classList.contains("xi-close")) {
    menu.classList.remove("xi-close");
    menu.classList.add("xi-bars");
  }
  depthBg.style.display = "none";
};
gnbLis.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    open(e);
    // alert("ddd");
  });
  item.addEventListener("mouseleave", (e) => {
    close(e);
  });
});

lang.addEventListener("click", (e) => {
  if (lang.innerHTML.includes("KOR")) {
    lang.innerHTML = 'ENG <i class="xi-caret-down-min"></i>';
  } else {
    lang.innerHTML = 'KOR <i class="xi-caret-down-min"></i>';
  }
});
menu.addEventListener("click", (e) => {
  if (menu.classList.contains("xi-bars")) {
    open(e);
  } else {
    close(e);
  }
});
