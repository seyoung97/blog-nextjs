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
      <p>나의 경험</p>
    </>
  );
}
