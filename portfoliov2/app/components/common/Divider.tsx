import classNames from "classnames";
// children in interface
interface DividerProps {
  children?: React.ReactNode;
  classNamesExtra?: string;
}
export const Divider = ({ children, classNamesExtra }: DividerProps) => {
  return (
    <div className={classNames("divider", classNamesExtra && classNamesExtra)}>
      {children}
    </div>
  );
};
