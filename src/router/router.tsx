import { createBrowserRouter, RouteObject } from "react-router";
import Home from "../home";
import Content from "../components/content";
import AboutMe from "../pages/about-me";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "aboutMe",
        element: <AboutMe />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  },
});

export default router;
