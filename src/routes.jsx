// src/routes.tsx
import { lazy } from "react";

export const routes = [
  { path: "/", Component: lazy(() => import("./pages/home/Home")) },
  { path: "/about", Component: lazy(() => import("./pages/about/About")) },

  // {
  //   path: "/services",
  //   children: [
  //     { index: true, element: lazy(() => import("./pages/services/Services")) },
  //     {
  //       path: "single",
  //       element: lazy(() => import("./pages/services/SingleService")),
  //     },
  //     { path: "team", element: lazy(() => import("./pages/services/Team")) },
  //   ],
  // },
  // {
  //   path: "/projects",
  //   children: [
  //     {
  //       index: true,
  //       element: lazy(() => import("./pages/projects/Projects1")),
  //     },
  //     {
  //       path: "alt",
  //       element: lazy(() => import("./pages/projects/Projects2")),
  //     },
  //     {
  //       path: "single",
  //       element: lazy(() => import("./pages/projects/SingleProject")),
  //     },
  //   ],
  // },
  // {
  //   path: "/contacts",
  //   children: [
  //     {
  //       index: true,
  //       element: lazy(() => import("./pages/contacts/Contacts1")),
  //     },
  //     {
  //       path: "alt",
  //       element: lazy(() => import("./pages/contacts/Contacts2")),
  //     },
  //   ],
  // },
  // {
  //   path: "/pages",
  //   children: [
  //     { path: "faq", element: lazy(() => import("./pages/misc/FAQ")) },
  //     {
  //       path: "gallery-grid",
  //       element: lazy(() => import("./pages/gallery/Grid")),
  //     },
  //     {
  //       path: "gallery-masonry",
  //       element: lazy(() => import("./pages/gallery/Masonry")),
  //     },
  //     { path: "404", element: lazy(() => import("./pages/misc/NotFound")) },
  //   ],
  // },
  // { path: "*", element: lazy(() => import("./pages/misc/NotFound")) },
];
