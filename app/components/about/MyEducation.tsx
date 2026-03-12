"use client";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { forwardRef } from "react";
import { useLanguage } from "../provider/LanguageProviderWrapper";

export const MyEducation = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useLanguage();

  return (
    <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl w-full md:w-1/4">
      <div className="card-body max-w-md">
        <h2 className="card-title text-primary">
          <AcademicCapIcon className="w-6 h-6" /> {t("about.educationTitle")}
        </h2>
        <div>
          <p>{t("about.educationParagraph1")}</p>
          <Link
            href="https://www.ifms.edu.br"
            className="font-bold text-primary link hover:text-accent"
            target="_blank"
          >
            {` Federal Institute of Mato Grosso do Sul (IFMS) `}
          </Link>
          <p>{t("about.educationParagraph2")}</p>
          <Link
            href="https://www.ufms.br"
            className="font-bold text-primary link hover:text-accent"
            target="_blank"
          >
            {` Federal University of Mato Grosso do Sul (UFMS).`}
          </Link>
          <p>{t("about.educationParagraph3")}</p>
        </div>
      </div>
    </div>
  );
});

MyEducation.displayName = "MyEducation";
