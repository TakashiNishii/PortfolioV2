import { ProjectItem } from "./ProjectItem";
import { MyProjectsData } from "./myProjectsData";

export const ProjectList = () => {
  const myProjects = MyProjectsData;
  return (
    <div className="grid w-full justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {myProjects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};
