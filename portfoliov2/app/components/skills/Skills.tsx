"use client";
import { useState } from "react";
import { SkillsList } from "./SkillsList";
import { MySkillsQuery } from "./mySkills";
import { Divider } from "../common/Divider";

export const Skills = () => {
  const [filter, setFilter] = useState("All");
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 mt-16">
      <h2 className="text-4xl font-bold text-primary">My Skills</h2>
      <h3 className="text-lg text-base-200 text-center">
        Here are all the technologies I use to make my projects.
      </h3>

      <div className="flex flex-col border border-accent rounded-lg w-full md:w-11/12 pr-1 md:flex-row">
        <div className="hidden md:flex w-1/6 rounded-l-lg border-2 flex-col">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-base ">
                Filter by:
                <span className="font-bold text-accent ml-1">{filter}</span>
              </span>
            </label>
            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                defaultChecked={filter === "All"}
                className="radio radio-primary"
                onClick={() => setFilter("All")}
              />
              <span className="label-text font-bold">All</span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                defaultChecked={filter === "Frontend"}
                className="radio radio-primary"
                onClick={() => setFilter("Frontend")}
              />
              <span className="label-text font-bold">Frontend</span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                defaultChecked={filter === "Backend"}
                className="radio radio-primary"
                onClick={() => setFilter("Backend")}
              />
              <span className="label-text font-bold">Backend</span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                defaultChecked={filter === "Mobile"}
                className="radio radio-primary"
                onClick={() => setFilter("Mobile")}
              />
              <span className="label-text font-bold">Mobile</span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                defaultChecked={filter === "Database"}
                className="radio radio-primary"
                onClick={() => setFilter("Database")}
              />
              <span className="label-text font-bold">Database</span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                defaultChecked={filter === "Others"}
                className="radio radio-primary"
                onClick={() => setFilter("Others")}
              />
              <span className="label-text font-bold">Others</span>
            </label>
          </div>
        </div>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="select select-bordered w-full md:hidden"
        >
          <option value={"All"}>All</option>
          <option value={"Frontend"}>Frontend</option>
          <option value={"Backend"}>Backend</option>
          <option value={"Mobile"}>Mobile</option>
          <option value={"Database"}>Database</option>
          <option value={"Others"}>Others</option>
        </select>

        <SkillsList filter={filter} setFilter={setFilter} />
      </div>

      <h3 className="text-lg text-accent text-center">
        And I still learning more technologies to improve my skills. 🚀
      </h3>

      <Divider id="projects" />
    </div>
  );
};
