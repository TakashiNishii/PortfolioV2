"use client";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { useLanguage } from "../provider/LanguageProviderWrapper";

export const PersonalInfo = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useLanguage();

  return (
    <div ref={ref} className="card p-2 md:card-side bg-base-100 shadow-xl w-full md:w-3/4">
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
          {t("about.personalInfoTitle")}
        </h2>
        <p className="text-lg">
          {t("about.personalInfoText")}
        </p>
        <div className="card-actions flex-col justify-end">
          <p className="text-lg font-bold text-accent">
            {t("about.personalInfoMainSkills")}
          </p>

          <div className="flex flex-row gap-2">
            <div className="badge badge-accent font-bold">React</div>
            <div className="badge badge-accent font-bold">TypeScript</div>
            <div className="badge badge-accent font-bold">GraphQL</div>
          </div>
          <Link href={"/?section=skills"} className="text-xs link text-accent">
            {t("about.personalInfoSeeMore")}
          </Link>
        </div>
      </div>
    </div>
  );
});

PersonalInfo.displayName = "PersonalInfo";
