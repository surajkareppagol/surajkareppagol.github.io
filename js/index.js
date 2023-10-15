/**************************************/
/* index.js */
/**************************************/

"use strict";

import skillData from "./skillData.js";
import projectData from "./projectsData.js";

const skillContainer = document.querySelector(".skill-container");
const projectContainer = document.querySelector(".project-container");

const navLinks = document.querySelector(".nav__links");
const scrollIcon = document.querySelector(".icon__scroll");

let skillContent = skillData.map((skill) => {
  return `
  <div class="skill-card">
    <div class="skill-card__imgs">
      <img class="skill-card__img" src="${skill.img}" alt="${skill.alt}" />
    </div>

    <div class="skill-card__content">
      <p class="skill-card__title">${skill.tool}</p>

      <div class="skill-card__tags">
        <p class="skill-card__tag">
        ${
          skill.projects === "none"
            ? "🧑‍💻 Tool"
            : `🛠️ ${skill.projects} ${
                parseInt(skill.projects) === 1 ? "Project" : "Projects"
              }`
        }
        </p>
        <p class="skill-card__tag">${
          skill.level === "Beginner" ? "🙂" : "😃"
        } ${skill.level}</p>
      </div>
    </div>
  </div>`;
});

function htmlContentTool(tools) {
  return tools
    .map((tool) => `<p class="project-card__tool">${tool}</p>`)
    .join(" ");
}

function htmlContentLinks(links) {
  return links
    .map(
      (link) =>
        `<a class="project-card__link" href="${link.url}" target="_blank">${link.link}</a>`
    )
    .join(" ");
}

let projectContent = projectData.map((project) => {
  return `
  <div class="project-card">
    <div class="project-card__imgs">
      <img class="project-card__img" src="${project.img}" alt="${
    project.alt
  }" />
    </div>

    <div class="project-card__content">
      <div class="project-card__project-title">
        <p>${project.title}</p>
      </div>

      <div class="project-card__content-main">
        <div class="project-card__details-container">
          <p class="project-card__details-heading">📝 About</p>
            <div class="project-card__details">
              <p class="project-card__detail">${project.about}</p>
            </div>
        </div>

        <div class="project-card__tools-container">
          <p class="project-card__tools-heading">🛠️ Tools</p>

          <div class="project-card__tools">
            ${htmlContentTool(project.tools)}
          </div>
        </div>

        <div class="project-card__links-container">
          <p class="project-card__links-heading">🌐 Links</p>

          <div class="project-card__links">
            ${htmlContentLinks(project.links)}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
});

skillContainer.innerHTML = skillContent.join(" ");

projectContainer.innerHTML = projectContent.join(" ");

navLinks.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList[0] === "nav__link") {
    const scrollSection = event.target.getAttribute("href");

    document.querySelector(`#${scrollSection}`).scrollIntoView({
      behavior: "smooth",
    });
  }
});

scrollIcon.addEventListener("click", () => {
  document.querySelector(`#skills`).scrollIntoView({
    behavior: "smooth",
  });
});

/**************************************/
/* EOF */
/**************************************/
