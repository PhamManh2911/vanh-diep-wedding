import localFont from "next/font/local";

export const serif = localFont({
  src: [
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-Black.ttf" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-BlackItalic.ttf" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-Bold.ttf" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-BoldItalic.ttf" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-Italic.ttf" },
    { path:"./fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf" },
  ],
  variable: "--font-serif",
});

export const sansserif = localFont({
  src: [
    { path: "./fonts/Inter/Inter-Black.ttf" },
    { path: "./fonts/Inter/Inter-Bold.ttf" },
    { path: "./fonts/Inter/Inter-ExtraBold.ttf" },
    { path: "./fonts/Inter/Inter-ExtraLight.ttf" },
    { path: "./fonts/Inter/Inter-Light.ttf" },
    { path: "./fonts/Inter/Inter-Medium.ttf" },
    { path: "./fonts/Inter/Inter-Regular.ttf" },
    { path: "./fonts/Inter/Inter-SemiBold.ttf" },
    { path: "./fonts/Inter/Inter-Thin.ttf" },
    { path: "./fonts/Inter/Inter-VariableFont_slnt,wght.ttf" },
  ],
  variable: "--font-sans-serif",
});

export const bellissima = localFont({
  src: "./fonts/HLT BellissimaScriptPro.ttf",
});
