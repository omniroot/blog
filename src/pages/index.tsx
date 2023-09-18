import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";

import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout";
import { MainPage } from "@/pages/MainPage/MainPage";
const PostPage = lazy(() => import("@/pages/PostPage/PostPage"));
const TestPage = lazy(() => import("@/pages/TestPage/TestPage"));

const Loading = <span>Loading...</span>;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<GlobalLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/post/:postName"
        element={
          <Suspense fallback={Loading}>
            <PostPage />
          </Suspense>
        }
      />
      <Route
        path="/test"
        element={
          <Suspense fallback={Loading}>
            <TestPage />
          </Suspense>
        }
      />
      <Route path="*" element={<span>404: Page not found</span>} />
    </Route>
  )
);
