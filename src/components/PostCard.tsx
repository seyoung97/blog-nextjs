import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = { post: Post };

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="w-full pb-5 rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <div className="w-full h-40 ">
          <Image
            src={`/image/posts/${path}.png`}
            alt={title}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <time className=" self-end mb-2 mr-2 text-slate-400">
            {date.toString()}
          </time>
          <h1 className=" font-bold text-xl">{title}</h1>
          <p className="mb-3 px-5 w-full truncate text-center">{description}</p>
          <span className="bg-sky-200	px-3 py-1 rounded-md text-sm">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
