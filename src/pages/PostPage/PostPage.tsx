import styles from "./PostPage.module.scss";

import { useParams } from "react-router-dom";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

// @ts-ignore
const getPost = (posts, postName) => {
  for (let path in posts) {
    if (path.includes(postName)) {
      return posts[path];
    }
  }
};

const PostPage = () => {
  const { postName } = useParams();
  const posts = import.meta.glob("/public/posts/*/*.md", {
    as: "raw",
    eager: true,
  });
  const post = getPost(posts, postName);

  return (
    <div className={styles.postpage}>
      <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default PostPage;

// public / posts / wallpapers / wallpapers.md;
