import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      name: "红树林官网",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      name: "关于",
    },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/education",
    name: "Education",
    meta: {
      name: "教育体系",
    },
    component: () => import("../views/Education.vue"),
  },
  {
    path: "/cooperation",
    name: "Cooperation",
    meta: {
      name: "携手合作",
    },
    component: () => import("../views/Cooperation.vue"),
  },
  {
    path: "/dynamic",
    name: "Dynamic",
    meta: {
      name: "行业动态",
    },
    component: () => import("../views/Dynamic.vue"),
  },
  {
    path: "/news",
    name: "News",
    meta: {
      name: "新闻",
    },
    component: () => import("../views/News.vue"),
  },
  {
    path: "/colleges",
    name: "Colleges",
    meta: {
      name: "合作院校",
    },
    component: () => import("../views/Cooperation/Colleges.vue"),
  },
  {
    path: "/enterprise",
    name: "Enterprise",
    meta: {
      name: "教育培训",
    },
    component: () => import("../views/Cooperation/Enterprise.vue"),
  },
  {
    path: "/:category/article/:id",
    name: "Article",
    component: () => import("../views/Article.vue"),
  },

  // 404 Not Found
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      name: "404 Not Found",
    },
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "404 Not Found",
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
      }
    }
  },
})

router.afterEach((to) => {
  if (to.meta.name) {
    document.title = to.meta.name
  }
})

export default router
