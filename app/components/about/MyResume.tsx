"use client";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { forwardRef } from "react";
import { useLanguage } from "../provider/LanguageProviderWrapper";

export const MyResume = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useLanguage();

  return (
    <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl w-full md:w-1/2">
      <div className="card-body justify-center ">
        <h2 className="card-title text-primary">
          <BriefcaseIcon className="h-6 w-6" />
          {t("about.resumeTitle")}
        </h2>
        <p>
          {t("about.resumeParagraph1")}
        </p>
        <p>
          {t("about.resumeParagraph2")}
        </p>
        <p>
          {t("about.resumeParagraph3")}
        </p>

        <div className="card-actions justify-center md:justify-start">
          <Link
            href={"/curriculo/Curriculo Ygor Takashi Nishi.pdf"}
            target="_blank"
            download={true}
            className="btn btn-primary"
          >
            <ArrowDownTrayIcon className="h-6 w-6" />
            {t("about.resumeDownload")}
          </Link>
        </div>
      </div>
    </div>
  );
});

MyResume.displayName = "MyResume";
