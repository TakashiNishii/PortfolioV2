import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export const PersonalInfo = () => {
  return (
    <div className="card p-2 md:card-side bg-base-100 shadow-xl w-full md:w-3/4">
      <figure>
        <Image
          src="/images/Eu-about.png"
          alt="Ygor Takashi Nishi"
          width={150}
          height={150}
          className="rounded-2xl"
        />
      </figure>
      <div className="card-body max-w-screen-lg">
        <h2 className="card-title text-primary text-2xl">
          <UserCircleIcon className="h-6 w-6" />
          Personal info
        </h2>
        <p className="text-lg">
          {` My name is Ygor Takashi Nishi and I'm 25 years old. Actually I'm a
          Frontend Developer, with a passion for solve problems creatively and
          intelligently. I have 5 years of experience in the area, and I'm
          always looking for new challenges and opportunities to grow.`}
        </p>
        <div className="card-actions flex-col justify-end">
          <p className="text-lg font-bold text-accent">
            My principal skills are:
          </p>

          <div className="flex flex-row gap-2">
            <div className="badge badge-accent font-bold">React</div>
            <div className="badge badge-accent font-bold">TypeScript</div>
            <div className="badge badge-accent font-bold">GraphQL</div>
          </div>
          <Link href={"/?section=skills"} className="text-xs link text-accent">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};
