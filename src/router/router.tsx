import { createBrowserRouter, RouteObject } from "react-router";
import Home from "../home";
import Content from "../components/content";
import AboutMe from "../pages/about-me";
import Resume from "../pages/resume";
import SkillsAndServices from "../pages/skills-services";
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
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "skillsAndServices",
        element: <SkillsAndServices />,
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
