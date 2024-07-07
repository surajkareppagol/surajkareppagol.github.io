import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../views/HomePage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import ToolsPage from "../views/ToolsPage.vue";
import ContactPage from "../views/ContactPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/projects",
    component: ProjectsPage,
  },
  {
    path: "/tools",
    component: ToolsPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
