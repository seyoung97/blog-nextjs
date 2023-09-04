import { getAllPosts } from "@/service/posts";
import FilterablePosts from "@/components/FilterablePosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "프론트앤드 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
