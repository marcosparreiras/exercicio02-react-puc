import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Movies } from "../views/Movies";
import { MovieDetail } from "../views/MovieDetail";

export function ApplicationRoutes() {
  const router = createBrowserRouter([
    {
      path: "/movie/:movieId",
      element: <MovieDetail />,
    },
    {
      path: "/*",
      element: <Movies />,
    },
  ]);

  return <RouterProvider router={router} />;
}
