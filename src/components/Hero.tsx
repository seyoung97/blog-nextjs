// 웹사이트에서 사용자에게 가장 먼저 보여지는 컴포넌트를 Hero 컴포넌트라고 함

import Image from "next/image";
import Link from "next/link";
import profileImg from "../../public/image/myimage.jpg";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        src={profileImg}
        height={250}
        width={250}
        alt="프로필 사진"
        className="mx-auto rounded-full mb-5 shadow-lg"
        priority
      ></Image>

      <h2 className="text-3xl font-bold">{"Hi, I'm Joey"}</h2>
      <h3 className="text-xl">Frontend Engineer</h3>
      <p>🥔🥔 코딩하는 감자 🥔🥔</p>

      <Link href="/contact">
        <button className="px-3 py-1 mt-3 bg-amber-200 rounded-md font-bold">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
