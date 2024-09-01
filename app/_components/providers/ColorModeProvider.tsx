"use client";

import { ColorModeContext, createColorModeStore } from "@/store/colorModeStore";
import { ReactNode, useMemo } from "react";

interface Props {
  children: ReactNode;
  mode?: "light" | "dark";
}

const ColorModeProvider = ({ children, mode = "light" }: Props) => {
  const store = useMemo(
    () =>
      createColorModeStore({
        mode: mode,
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={store}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
