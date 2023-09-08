import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "나에 대해 소개",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="mx-10 my-20 leading-relaxed">
        <h2 className="font-bold text-2xl mb-3">
          안녕하세요👋 가파른 성장곡선을 그리는 프론트엔드 개발자 정세영입니다!{" "}
        </h2>
        <p>코딩을 배우기 전부터 무언가를 제작하는 것에 기쁨을 느끼다,</p>
        <p>지금은 코딩으로 상상을 현실로 만드는 것에 매료되었습니다.</p>
        <p>
          웹개발솔루션 전문 회사에서 디자이너, 기획자 분들과 협업하여 포토북제작
          서비스를 개발한 경험이 있습니다.{" "}
        </p>
        <p>
          개발자의 생명은 꾸준함이라고 믿고 1일 1커밋 운동과 기술블로그를
          운영하고 있습니다😄
        </p>
      </section>
    </>
  );
}
