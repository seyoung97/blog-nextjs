import { Post } from "@/service/posts";
import PostCard from "./PostCard";

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((el) => {
        return (
          <li key={el.title}>
            <PostCard post={el} />
          </li>
        );
      })}
    </ul>
  );
}
