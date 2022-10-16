import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { GraphPage } from "../pages/GraphPage";
import { MoodPage } from "../pages/MoodPage";
import { OnboardPage } from "../pages/OnboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OnboardPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/mood",
    element: <MoodPage />
  },
  {
    path: "/home",
    element: <GraphPage />
  },
]);
