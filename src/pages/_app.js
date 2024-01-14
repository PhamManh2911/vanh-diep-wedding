import theme from "@/configs/theme";
import Head from "next/head";

import { ThemeProvider } from "@mui/material";
import { MediaProvider } from "@/providers/MediaProvider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <MediaProvider>
          <Component {...pageProps} />
        </MediaProvider>
      </ThemeProvider>
    </>
  );
}
