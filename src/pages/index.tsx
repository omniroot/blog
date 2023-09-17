import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";

import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout";
import { MainPage } from "@/pages/MainPage/MainPage";
const TestPage = lazy(() => import("@/pages/TestPage/TestPage"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<GlobalLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/test"
        element={
          <Suspense fallback={<span>Loading...</span>}>
            <TestPage />
          </Suspense>
        }
      />
    </Route>
  )
);
