import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export const MyEducation = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-full md:w-1/4">
      <div className="card-body max-w-md">
        <h2 className="card-title text-primary">
          <AcademicCapIcon className="w-6 h-6" /> My Education
        </h2>
        <div>
          <p>{`I have a strong academic background in computer science, with a Computer Technician degree at`}</p>
          <Link
            href="https://www.ifms.edu.br"
            className="font-bold text-primary link hover:text-accent"
            target="_blank"
          >
            {` Federal Institute of Mato Grosso do Sul (IFMS) `}
          </Link>
          <p>{`and a Bachelor's degree in Computer Science at`}</p>
          <Link
            href="https://www.ufms.br"
            className="font-bold text-primary link hover:text-accent"
            target="_blank"
          >
            {` Federal University of Mato Grosso do Sul (UFMS).`}
          </Link>
          <p>{`
        During my academic life, I gained experience in robotics, software development, and research. I have worked in several projects, and I have published some papers in conferences and journals.`}</p>
        </div>
      </div>
    </div>
  );
};
