let burgerIcon = document.querySelector(".burger i");
burgerIcon.style.cssText =
  "cursor:pointer; animation:scaling 1.5s ease-in-out infinite";

let sideBar = document.querySelector("#sidebar");
sideBar.style.display = "none";

let sideBarLi = document.querySelectorAll("#sidebar .links li a");

//create icon to close the sidebar.
let closeIcon = document.createElement("span");
closeIcon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
closeIcon.style.cssText =
  "position:absolute; right:10px; top:10px; cursor:pointer; z-index:2; color:white; font-size:40px;";
closeIcon.onmouseenter = () => {
  closeIcon.style.animation = "rotate 0.5s ease-in-out forwards ";
};
closeIcon.onmouseleave = () => {
  closeIcon.style.animation = "rotate-back 0.5s ease-in-out forwards ";
};
sideBar.appendChild(closeIcon);

//adding click event to the close icon.
closeIcon.addEventListener("click", (e) => {
  sideBar.style.display = "none";
});
//adding click event to burger icon to collapse the sidebar.
burgerIcon.addEventListener("click", (e) => {
  sideBar.style.cssText = "display:flex";
});
//removing active class from all links and adding it to the clicked one.
sideBarLi.forEach((item) => {
  item.addEventListener("click", (e) => {
    sideBarLi.forEach((i) => {
      i.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
