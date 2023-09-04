import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: "https://github.com/seyoung97",
  },
  {
    icon: <AiFillLinkedin />,
    url: "https://github.com/seyoung97",
  },
  {
    icon: <AiFillYoutube />,
    url: "https://www.youtube.com/watch?v=GvEnj2rMITI&t=14s",
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>seyoungchung9050@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-4xl hover:text-blue-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
