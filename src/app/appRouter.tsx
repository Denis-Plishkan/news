import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { Main } from "@/pages/main";
import { News } from "@/pages/news";

export const appRouter = createBrowserRouter(
  [
    {
      element: <BaseLayout />,
      errorElement: <div>Error</div>,
      children: [
        { path: "/", element: <Main /> },
        { path: "/news/:id", element: <News/> },
      ],
    },
  ],
  {
    basename: "/react-news",
  },
);
