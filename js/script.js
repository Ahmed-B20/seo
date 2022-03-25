// start work in mode toggler
let modeToggler = document.getElementById("theme-toggler");
let body = document.body;

if (localStorage.getItem("modeTheme") == "dark") {
  body.classList.add("active");
  modeToggler.querySelector("i").classList.add("fa-sun");
} else {
  body.classList.remove("active");
  modeToggler.querySelector("i").classList.remove("fa-sun");
}

modeToggler.addEventListener("click", () => {
  body.classList.toggle("active");

  modeToggler.querySelector("i").classList.toggle("fa-sun");

  if (modeToggler.querySelector("i").classList.contains("fa-sun")) {
    localStorage.setItem("modeTheme", "dark");
  } else {
    localStorage.setItem("modeTheme", "light");
  }
});
// end work in mode toggler

// =======================

// start work in custom scroll bar
let customScroll = document.getElementById("custom-scroll");
let bar = document.getElementById("bar");

window.addEventListener("scroll", () => {
  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = (window.scrollY / maxHeight) * 100;
  bar.style.width = percentage + "%";
});
// end work in custom scroll bar

// =======================

// start header nav
let navToggler = document.getElementById("nav-toggler");
let navContainer = document.getElementById("nav");
let navLinks = document.querySelectorAll(".nav-link");

navToggler.addEventListener("click", () => {
  navContainer.classList.toggle("active");
  navToggler.querySelector("i").classList.toggle("fa-times");
});

navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    if (!!document.querySelector(".nav-link.active")) {
      document.querySelector(".nav-link.active").classList.remove("active");
    }

    e.classList.toggle("active");
  });
});
// end header nav
