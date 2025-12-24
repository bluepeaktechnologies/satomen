import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";
import Layout from "./layout/Layout";
import "@xyflow/react/dist/base.css";

const withLayout = {
  element: <Layout />,
  children: routes,
};

const router = createBrowserRouter([withLayout]);

function App() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
