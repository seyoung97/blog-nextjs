import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import PostsCarousel from "@/components/PostsCarousel";

export default async function HomePage() {
  return (
    <section>
      <Hero />
      <FeaturedPosts />
      <PostsCarousel />
    </section>
  );
}
