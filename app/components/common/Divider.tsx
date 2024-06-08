import classNames from "classnames";
// children in interface
interface DividerProps {
  id?: string;
  children?: React.ReactNode;
  classNamesExtra?: string;
}
export const Divider = ({ id, children, classNamesExtra }: DividerProps) => {
  return (
    <div
      id={id}
      className={classNames("divider", classNamesExtra && classNamesExtra)}
    >
      {children}
    </div>
  );
};
