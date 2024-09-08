import { MainPage } from "@/pages/MainPage/MainPage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/styles.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import "@/utils/checkChrome.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
