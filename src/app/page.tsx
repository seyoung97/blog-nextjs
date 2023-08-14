import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import PostsCarousel from "@/components/PostsCarousel";

export default async function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <PostsCarousel />
    </section>
  );
}
