import { ThemeProvider, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

// Themes
import { darkTheme, lightTheme } from "../themes";

//UIProvider
import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3} >
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
