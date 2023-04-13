const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/unidade01",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Unidade01.vue") }],
  },
  {
    path: "/unidade02",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Unidade02.vue") }],
  },
  {
    path: "/contato",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Contato.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
