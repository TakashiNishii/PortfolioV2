"use client";
import { LanguageSwitchBase } from "./LanguageSwitchBase";

import { useTranslation } from "../../i18n/client";

interface LanguageSwitchProps {
  lng: string;
}

export const LanguageSwitch = ({ lng }: LanguageSwitchProps) => {
  const { t } = useTranslation(lng, "common");
  return <LanguageSwitchBase t={t} lng={lng} />;
};
