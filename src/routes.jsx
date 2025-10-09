// src/routes.tsx
import { lazy } from "react";
import { Navigate } from "react-router-dom";

export const routes = [
  { path: "/", Component: lazy(() => import("./pages/home/Home")) },

  // --- ABOUT ROUTES ---
  {
    path: "/about",
    Component: () => <Navigate to="/about/company" replace />,
  },
  {
    path: "/about/company",
    Component: lazy(() => import("./pages/about/CompanyProfile")),
  },
  {
    path: "/about/management-team",
    Component: lazy(() => import("./pages/about/ManagementTeam")),
  },
  {
    path: "/about/team",
    Component: lazy(() => import("./pages/about/Team")),
  },

  // --- OTHER ROUTES ---
  {
    path: "/contact-us",
    Component: lazy(() => import("./pages/contacts/Contact")),
  },
  {
    path: "/projects",
    Component: lazy(() => import("./pages/projects/Projects")),
  },

  {
    path: "/projects/:id",
    Component: lazy(() => import("./pages/projects/ProjectsDetails")),
  },

  { path: "/services", Component: lazy(() => import("./pages/services/Services")) },

  { path: "/services/:id", Component: lazy(() => import("./pages/services/ServiceDetails")) },

  



  //  {
  //    path: "/services",
  //    children: [
  //      { index: true, element: lazy(() => import("./pages/services/Services")) },
  //      {
  //        path: "single",
  //        element: lazy(() => import("./pages/services/SingleService")),
  //      },
  //      { path: "team", element: lazy(() => import("./pages/services/Team")) },
  //    ],
  //  },
//    {
//      path: "/projects",
//      children: [
//        {
//          index: true,
//          element: lazy(() => import("./pages/projects/Projects")),
//        },
//       //  {
//       //    path: "alt",
//       //    element: lazy(() => import("./pages/projects/Projects2")),
//       //  },
//       //  {
//       //    path: "single",
//       //    element: lazy(() => import("./pages/projects/SingleProject")),
//       //  },
//      ],
//    },
//    {
//      path: "/contacts",
//      children: [
//        {
//          index: true,
//          element: lazy(() => import("./pages/contacts/Contacts1")),
//        },
//        {
//          path: "alt",
//          element: lazy(() => import("./pages/contacts/Contacts2")),
//        },
//      ],
//    },
//    {
//      path: "/pages",
//    children: [
//        { path: "faq", element: lazy(() => import("./pages/misc/FAQ")) },
//        {
//         path: "gallery-grid",
//          element: lazy(() => import("./pages/gallery/Grid")),
//        },
//        {
//          path: "gallery-masonry",
//          element: lazy(() => import("./pages/gallery/Masonry")),
//        },
//       { path: "404", element: lazy(() => import("./pages/misc/NotFound")) },
//      ],
//    },
//    { path: "*", element: lazy(() => import("./pages/misc/NotFound")) },
 ];
