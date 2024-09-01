import { getCookie, setCookie } from "cookies-next";
import { createContext, useContext } from "react";
import { createStore, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";

interface ColorModeProps {
  mode: "light" | "dark";
}

interface ColorModeState extends ColorModeProps {
  setMode: (mode: "light" | "dark") => void;
}

type ColorModeStore = StoreApi<ColorModeState>;

export const ColorModeContext = createContext<ColorModeStore | null>(null);

// Utility function to safely retrieve the theme from cookies
const getInitialMode = (): "light" | "dark" => {
  const cookieMode = getCookie("theme") as string | undefined;
  if (cookieMode === "light" || cookieMode === "dark") {
    return cookieMode;
  }
  return "light"; // Default mode if cookie is absent or invalid
};

// Store factory function
export const createColorModeStore = (initProps?: Partial<ColorModeProps>) => {
  const DEFAULT_PROPS: ColorModeProps = {
    mode: getInitialMode(),
  };

  return createStore<ColorModeState>()(
    devtools((set) => ({
      ...DEFAULT_PROPS,
      ...initProps,
      setMode: (mode) => {
        setCookie("theme", mode);
        set(() => ({ mode }));
      },
    }))
  );
};

// Custom hook for accessing the store
export const useColorModeStore = (): ColorModeStore => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error(
      "useColorModeStore must be used within a ColorModeProvider"
    );
  }
  return context;
};
