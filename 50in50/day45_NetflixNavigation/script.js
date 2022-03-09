const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", (e) =>
	nav.forEach((nav_el) => nav_el.classList.add("visible"))
);
closeBtn.addEventListener("click", (e) =>
	nav.forEach((nav_el) => nav_el.classList.remove("visible"))
);
