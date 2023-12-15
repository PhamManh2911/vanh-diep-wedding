import theme from '@/configs/theme';

import { ThemeProvider } from '@mui/material';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
