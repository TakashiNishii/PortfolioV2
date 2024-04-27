import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../i18n/settings";

interface LanguageSwitcherProps {
  lng: string;
  t: any;
}

export const LanguageSwitchBase = ({ t, lng }: LanguageSwitcherProps) => {
  return (
    <div>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </div>
  );
};
