import { getFeaturedPosts } from "@/service/posts";
import PostsCard from "./PostCard";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="p-7">
      <h2 className="text-2xl font-bold my-5">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
