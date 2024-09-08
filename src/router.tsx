import { Global } from "@/pages/Global/Global";
import { MainPage } from "@/pages/MainPage/MainPage";
import { PostsPage } from "@/pages/PostsPage/PostsPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Global />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Route>
  )
);
