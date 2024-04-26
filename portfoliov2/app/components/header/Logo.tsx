import { CommandLineIcon } from "@heroicons/react/24/outline";

export const Logo = () => {
  return (
    <div className="flex flex-row gap-2 link-hover cursor-pointer text-white  items-center hover:text-accent">
      <CommandLineIcon className="w-8 h-8" />
      <h2 className=" text-xl font-semibold">Takashi Nishi</h2>
    </div>
  );
};
