import theme from "@/configs/theme";

import { ThemeProvider } from "@mui/material";
import "@/styles/globals.css";
import { MediaProvider } from "@/providers/MediaProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MediaProvider>
        <Component {...pageProps} />
      </MediaProvider>
    </ThemeProvider>
  );
}
