const grid_bg = document.querySelectorAll(".con.content4 li");

grid_bg.forEach((item, idx) => {
  item.style.backgroundImage = `url('./images/grid0${idx + 1}_bg.jpg')`;
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
  item.addEventListener('mouseenter',(e)=>{
    
  })
});
