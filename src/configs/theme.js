import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      dark: "#1D2C40",
      midDark: "#2F4666",
      main: "#5788CD",
      midLight: "#5883BF",
      light: "#F7FAFF",
    },
    error: {
      dark: "#3D0004",
      midDark: "#87040B",
      main: "#E9222D",
      midLight: "#F2A2A7",
      light: "#FFF8F8",
    },
    confirm: {
      dark: "#003D18",
      midDark: "#058737",
      main: "#07CC53",
      midLight: "#A2F2C1",
      light: "#F7FFFA",
    },
    neutral: {
      dark: "#040F1E",
      midDark: "#354457",
      main: "#677383",
      midLight: "#C3C8CE",
      light: "#fff",
    },
    stateLayer: {
      onSurface: "rgba(29, 27, 32, 0.12)",
      onPrimary8: "rgba(255, 255, 255, 0.08)",
      onPrimary12: "rgba(255, 255, 255, 0.12)",
      primary8: "rgba(53, 131, 232, 0.08)",
      primary12: "rgba(53, 131, 232, 0.12)",
    }
  },
});

theme = createTheme(theme, {
  typography: {
    fontWeight: 400,
    color: theme.palette.neutral.dark,
    display: {
      textAlign: 'center',
      fontFamily: "Bellissima",
      fontSize: 57,
      lineHeight: "64px",
      [theme.breakpoints.down('sm')]: {
        fontSize: 36,
        lineHeight: "44px",
      },
    },
    headline1: {
      textAlign: 'center',
      fontFamily: "Serif",
      fontSize: 32,
      lineHeight: "40px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
        lineHeight: '24px',
      },
    },
    headline2: {
      textAlign: 'center',
      fontFamily: "Serif",
      fontSize: 24,
      lineHeight: "32px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        lineHeight: '20px',
      },
    },
    headline3: {
      textAlign: 'center',
      fontFamily: "Serif",
      fontSize: 16,
      lineHeight: "24px",
    },
    title: {
      textAlign: 'center',
      fontFamily: "Sans Serif",
      fontSize: 22,
      lineHeight: "28px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: "20px",
      },
    },
    label: {
      textAlign: 'center',
      fontFamily: "Sans Serif",
      fontSize: 14,
      fontWeight: 700,
      lineHeight: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 11,
        lineHeight: "16px",
      },
    },
    body: {
      textAlign: 'center',
      fontFamily: "Sans Serif",
      fontSize: 16,
      lineHeight: "24px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
        lineHeight: '16px',
      },
    }
  },
});

export default theme;