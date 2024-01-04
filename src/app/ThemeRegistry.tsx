"use client";

import * as React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { Options as OptionsOfCreateCache } from "@emotion/cache";
import { useModeContext } from "./providers";
import createEmotionCache from "./createEmotionCache";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import ColorModeContext from "./ColorModeContext";

// ----------------------------------------------------------------------

type Props = {
  options: Omit<OptionsOfCreateCache, "insertionPoint">;
  children: React.ReactNode;
};
const clientSideEmotionCache = createEmotionCache();
// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: any) {
  const { options, children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });
  const { emotionCache = clientSideEmotionCache } = props;

  // Set dark mode based on media query
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const mode = getCookie("darkMode");
    if (typeof mode === "boolean") {
      setDarkMode(mode);
    } else {
      setCookie("darkMode", true);
    }
  }, []);

  const { mode } = useModeContext();
  const _setDarkMode = (newMode: boolean) => {
    setCookie("darkMode", newMode);
    setDarkMode(newMode);
  };
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <CacheProvider value={emotionCache}>
       <ColorModeContext.Provider
          value={{ darkMode, setDarkMode: _setDarkMode }}
        >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
