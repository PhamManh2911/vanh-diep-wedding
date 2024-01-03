import localFont from "next/font/local";

export const serif = localFont({
  src: [
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-Black.woff2" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-BlackItalic.woff2" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-Bold.woff2" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-BoldItalic.woff2" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-Italic.woff2" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.woff2" },
  ],
  variable: "--font-serif",
});

export const sansserif = localFont({
  src: [
    { path: "./fonts/Inter/Inter-Black.woff2" },
    { path: "./fonts/Inter/Inter-Bold.woff2" },
    { path: "./fonts/Inter/Inter-ExtraBold.woff2" },
    { path: "./fonts/Inter/Inter-ExtraLight.woff2" },
    { path: "./fonts/Inter/Inter-Light.woff2" },
    { path: "./fonts/Inter/Inter-Medium.woff2" },
    { path: "./fonts/Inter/Inter-Regular.woff2" },
    { path: "./fonts/Inter/Inter-SemiBold.woff2" },
    { path: "./fonts/Inter/Inter-Thin.woff2" },
    { path: "./fonts/Inter/Inter-VariableFont_slnt,wght.woff2" },
  ],
  variable: "--font-sans-serif",
});

export const bellissima = localFont({
  src: "./fonts/HLT BellissimaScriptPro.woff2",
});
