import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="card card-compact max-w-sm  bg-base-100 shadow-xl border border-transparent hover:border hover:border-primary">
      <figure className="w-full max-h-48">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-primary">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <Link
            className="btn-link font-bold hover:text-accent"
            href={project.link}
            target="_blank"
          >
            View project
          </Link>
        </div>
      </div>
    </div>
  );
};
