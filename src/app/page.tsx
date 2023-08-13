import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import PostsCard from "@/components/PostCard";

export default async function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </section>
  );
}
