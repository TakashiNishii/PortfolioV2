import { LanguageIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";

interface LanguageSwitcherProps {
  lng: string;
  t: any;
}

export const LanguageSwitchBase = ({ t, lng }: LanguageSwitcherProps) => {
  return (
    <div>
      <Trans t={t}>
        <div className="dropdown dropdown-end flex">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-xs text-white hover:bg-primary hover:text-accent"
          >
            <LanguageIcon className="h-6 w-6 " />
          </label>

          <ul
            id="moreOptions"
            tabIndex={0}
            className="dropdown-content bg-secondary z-[1] gap-2 menu p-2 shadow  rounded-box w-52"
          >
            <li>
              <Link href={"/pt"}>Português</Link>
            </li>
            <li>
              <Link href={"/en"}>English</Link>
            </li>
          </ul>
        </div>
      </Trans>
    </div>
  );
};
