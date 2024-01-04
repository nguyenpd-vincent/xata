"use client";
import { getCookie, setCookie } from "cookies-next";
import { createContext, useContext, useState, useMemo } from "react";

// ----------------------------------------------------------------------

const ModeContext = createContext({} as any);

export const useModeContext = () => {
  const context = useContext(ModeContext);

  return context;
};

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const modeCookie = getCookie("mode_hxb");
  const [mode, setMode] = useState<"light" | "dark">(modeCookie == 'dark' ? modeCookie : 'light');

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        const modeChange = getCookie("darkMode") === "light" ? "dark" : "light"
        setCookie("mode_hxb", modeChange)
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}
