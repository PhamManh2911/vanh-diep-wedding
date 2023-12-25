import { createContext, useContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const MediaContext = createContext();

export function useMedia() {
  return useContext(MediaContext);
}

export function MediaProvider({ children }) {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MediaContext.Provider value={{ isPhone }}>
      {children}
    </MediaContext.Provider>
  );
}