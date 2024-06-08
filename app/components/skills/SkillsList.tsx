import Image from "next/image";
import { MySkillsQuery } from "./mySkills";

interface SkillsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export const SkillsList = ({ filter, setFilter }: SkillsProps) => {
  const mySkills = MySkillsQuery;

  return (
    <div className="overflow-x-auto flex-1 h-96 max-h-96">
      {/* Show results */}
      {mySkills && (
        <p className="text-accent text-center md:text-start md:ml-4">
          {
            mySkills.filter((skill) => {
              if (filter === "All") return true;
              return skill.tags.includes(filter);
            }).length
          }{" "}
          results found.
        </p>
      )}
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Time of Experience</th>
            <th className="hidden md:block">Tags</th>
          </tr>
        </thead>
        <tbody>
          {mySkills
            .filter((skill) => {
              if (filter === "All") return true;
              return skill.tags.includes(filter);
            })
            .map((skill) => (
              <tr key={skill.name}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-6 h-6 md:w-12 md:h-12">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{skill.name}</div>
                    </div>
                  </div>
                </td>
                <td>{skill.time}</td>
                <td className="hidden md:block">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => setFilter(tag)}
                      className="badge badge-primary font-bold hover:text-accent cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Time of Experience</th>
            <th className="hidden md:block">Tags</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
