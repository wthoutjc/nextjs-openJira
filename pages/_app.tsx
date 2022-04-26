import { ThemeProvider, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

// Themes
import { darkTheme, lightTheme } from "../themes";

//UIProvider
import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
