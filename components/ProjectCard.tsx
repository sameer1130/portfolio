import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  img,
  title,
  description,
  githubLink,
}: {
  img: string;
  title: string;
  description: string;
  githubLink: string;
}) {
  return (
    <div className="relative group">
      {/* Card Container */}
      <div className="bg-zinc-700 rounded-2xl overflow-hidden">
        {/* Image Container */}
        <div className="relative flex justify-center items-center rounded-2xl">
          <Image
            src={img}
            alt={title}
            className="rounded-2xl p-4 transform transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
            width={400}
            height={400}
            
          />
          {/* GitHub Icon */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 bg-black text-white p-2 rounded-full shadow-lg"
            title="View on GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        <div className="font-bold text-lg text-white">{title}</div>
        <div className="text-zinc-400">{description}</div>
      </div>
    </div>
  );
}
