import path from "path";
import { readFile } from "fs/promises";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  // process.cwd()는 process가 현재 동작하고 있는 현재 경로를 받아오는 것을 의미
  return (
    readFile(filePath, "utf-8")
      // readFile은 promise에 있는걸로 가져와야함
      // 그래야 프로미스를 반환하는 readFile을 사용할 수 있음
      .then<Post[]>(JSON.parse)
      // .then(data => JSON.parse(data))의 축약버전임
      // 전달하는 것과 인자가 같을 때 생략 가능
      // <Post[]>라고 타입을 지정해줘야 아래 sort(a, d) 에서 a, d에 대한 타입 에러가 안남
      .then((posts) => posts.sort((a, d) => (a.date > d.date ? -1 : 1)))
  );
  // 최신순으로 정렬
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}

export async function getPost(title: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((item) => item.title === title);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts(); //
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
