import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full max-h-[500px]"
        src={`/image/posts/${path}.png`}
        alt={title}
        width={760}
        height={500}
      />
      <PostContent post={post} />
    </article>
  );
}
