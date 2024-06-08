import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export const MyResume = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-full md:w-1/2">
      <div className="card-body justify-center ">
        <h2 className="card-title text-primary">
          <BriefcaseIcon className="h-6 w-6" />
          My Resume
        </h2>
        <p>
          As a developer with a few years of experience, I have worked in
          several projects that have helped me to improve my skills and
          knowledge. And I continue to be passionate about learning new
          technologies and methodologies.
        </p>
        <p>
          I have worked in frontend, backend and mobile projects, and in all
          projects I use to work with agile methodologies, like Scrum and
          Kanban.
        </p>
        <p>
          If you want to know more about my professional life, you can check my
          resume.
        </p>

        <div className="card-actions justify-center md:justify-start">
          <Link
            href={"/curriculo/Curriculo Ygor Takashi Nishi.pdf"}
            target="_blank"
            download={true}
            className="btn btn-primary"
          >
            <ArrowDownTrayIcon className="h-6 w-6" />
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};
