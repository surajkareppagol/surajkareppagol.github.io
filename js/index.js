"use strict";

const navLinks = document.querySelectorAll(".nav-container__link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionToScrollTo = link.getAttribute("href");
    document.querySelector(`.${sectionToScrollTo}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
