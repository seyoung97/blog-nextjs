import { getNonFeaturedPosts } from "@/service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function PostsCarousel() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-4 p-7">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => {
          return <PostCard key={post.path} post={post} />;
        })}
      </MultiCarousel>
    </section>
  );
}
