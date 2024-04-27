import { Divider } from "../common/Divider";
import { ProjectList } from "./ProjectList";

export const MyProjects = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 mt-16">
      <h2 className="text-4xl font-bold text-primary">Portfolio</h2>
      <h3 className="text-lg text-base-200 text-center">
        My recent projects and contributions.
      </h3>

      <ProjectList />
      <Divider id="contact" />
    </div>
  );
};
