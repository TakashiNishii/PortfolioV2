import { PersonalInfo } from "./PersonalInfo";
import { MyResume } from "./MyResume";
import { MyEducation } from "./MyEducation";
import { Divider } from "../common/Divider";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex flex-col w-full justify-center items-center gap-4 mt-16"
    >
      <h2 className="text-4xl font-bold text-primary">About me</h2>
      <h3 className="text-lg text-base-200">
        Get to know a little more about me.
      </h3>
      <PersonalInfo />

      <div className="flex flex-col justify-center w-full md:flex-row  gap-4">
        <MyResume />

        <MyEducation />
      </div>

      <Divider />
    </div>
  );
};
