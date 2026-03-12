"use client";
import { useState } from "react";
import { SkillsList } from "./SkillsList";
import { Divider } from "../common/Divider";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateSplitText } from "../common/textAnimation";
import { useLanguage } from "../provider/LanguageProviderWrapper";

export const Skills = () => {
  const [filter, setFilter] = useState("All");
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLHeadingElement>(null);
  const { t } = useLanguage();

  useGSAP(() => {
    if (title.current) {
      animateSplitText(title.current);
    }
    if (subtitle.current) {
      setTimeout(() => {
        animateSplitText(subtitle.current, { stagger: 0.02 });
      }, 200);
    }

  }, [title, subtitle]);

  const getFilterLabel = (value: string) => {
    switch (value) {
      case "Frontend":
        return t("skills.filterFrontend");
      case "Backend":
        return t("skills.filterBackend");
      case "Mobile":
        return t("skills.filterMobile");
      case "Database":
        return t("skills.filterDatabase");
      case "Cloud":
        return t("skills.filterCloud");
      case "Others":
        return t("skills.filterOthers");
      case "All":
      default:
        return t("skills.filterAll");
    }
  };

  return (
    <div id="skills" className="flex flex-col w-full justify-center items-center gap-4 mt-16">
      <h2 className="text-4xl font-bold text-primary" ref={title}>
        {t("skills.title")}
      </h2>
      <h3 className="text-lg text-base-200 text-center" ref={subtitle}>
        {t("skills.subtitle")}
      </h3>

      <div className="flex flex-col border border-accent rounded-lg w-full md:w-11/12 pr-1 md:flex-row">
        <div className="hidden md:flex w-1/6 rounded-l-lg border-2 flex-col">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-base ">
                {t("skills.filterBy")}
                <span className="font-bold text-accent ml-1">
                  {getFilterLabel(filter)}
                </span>
              </span>
            </label>
            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                checked={filter === "All"}
                className="radio radio-primary"
                onClick={() => setFilter("All")}
              />
              <span className="label-text font-bold">
                {t("skills.filterAll")}
              </span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                checked={filter === "Frontend"}
                className="radio radio-primary"
                onClick={() => setFilter("Frontend")}
              />
              <span className="label-text font-bold">
                {t("skills.filterFrontend")}
              </span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                checked={filter === "Backend"}
                className="radio radio-primary"
                onClick={() => setFilter("Backend")}
              />
              <span className="label-text font-bold">
                {t("skills.filterBackend")}
              </span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                checked={filter === "Mobile"}
                className="radio radio-primary"
                onClick={() => setFilter("Mobile")}
              />
              <span className="label-text font-bold">
                {t("skills.filterMobile")}
              </span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                checked={filter === "Database"}
                className="radio radio-primary"
                onClick={() => setFilter("Database")}
              />
              <span className="label-text font-bold">
                {t("skills.filterDatabase")}
              </span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                checked={filter === "Cloud"}
                className="radio radio-primary"
                onClick={() => setFilter("Cloud")}
              />
              <span className="label-text font-bold">
                {t("skills.filterCloud")}
              </span>
            </label>

            <label className="label justify-start cursor-pointer gap-2">
              <input
                type="radio"
                name="techs"
                checked={filter === "Others"}
                className="radio radio-primary"
                onClick={() => setFilter("Others")}
              />
              <span className="label-text font-bold">
                {t("skills.filterOthers")}
              </span>
            </label>
          </div>
        </div>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-full md:hidden"
          defaultValue={"All"}
        >
          <option value={"All"} disabled>
            {t("skills.filterAll")}
          </option>
          <option value={"Frontend"}>{t("skills.filterFrontend")}</option>
          <option value={"Backend"}>{t("skills.filterBackend")}</option>
          <option value={"Mobile"}>{t("skills.filterMobile")}</option>
          <option value={"Database"}>{t("skills.filterDatabase")}</option>
          <option value={"Cloud"}>{t("skills.filterCloud")}</option>
        </select>

        <SkillsList filter={filter} setFilter={setFilter} />
      </div>

      <h3 className="text-lg text-accent text-center">
        {t("skills.learningMore")}
      </h3>

      <Divider id="projects" />
    </div>
  );
};
