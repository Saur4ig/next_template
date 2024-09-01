import { ReactNode } from "react";
import ColorModeProvider from "./ColorModeProvider";

interface Props {
  children: ReactNode;
  mode?: "light" | "dark";
}

const Providers = ({ children, mode = "light" }: Props) => {
  return <ColorModeProvider mode={mode}>{children}</ColorModeProvider>;
};

export default Providers;
