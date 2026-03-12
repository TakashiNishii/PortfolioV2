import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../provider/LanguageProviderWrapper";

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    titlePt?: string;
    description: string;
    descriptionPt?: string;
    image: string;
    link: string;
  };
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const { language, t } = useLanguage();

  const title =
    language === "pt" && project.titlePt ? project.titlePt : project.title;
  const description =
    language === "pt" && project.descriptionPt
      ? project.descriptionPt
      : project.description;

  return (
    <div className="card card-compact max-w-sm  bg-base-100 shadow-xl border border-transparent hover:border hover:border-primary">
      <figure className="w-full max-h-48">
        <Image
          src={project.image}
          alt={title}
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-primary">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            className="btn-link font-bold hover:text-accent"
            href={project.link}
            target="_blank"
          >
            {t("projects.viewProject")}
          </Link>
        </div>
      </div>
    </div>
  );
};
