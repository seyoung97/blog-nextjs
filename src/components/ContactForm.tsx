"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form", form);
    setBanner({ message: "성공했습니다! 😄", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit} className="w-full max-w-md flex flex-col">
        <label htmlFor="from" className="text-lg font-bold mb-1">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="py-1 mb-2 shadow-md rounded-md"
        />
        <label htmlFor="subject" className="text-lg font-bold mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          autoFocus
          value={form.subject}
          onChange={onChange}
          className="py-1 mb-2 shadow-md rounded-md"
        />
        <label htmlFor="message" className="text-lg font-bold mb-1">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          autoFocus
          value={form.message}
          onChange={onChange}
          className=" mb-2 shadow-md rounded-md"
        />
        <button className="mt-4 py-1 bg-sky-900 text-neutral-50	text-lg font-bold rounded-md hover:bg-sky-500">
          Submit
        </button>
      </form>
    </>
  );
}
