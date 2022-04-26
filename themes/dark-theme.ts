import { createTheme } from "@mui/material";

// Colors
import { red } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#474787",
        },
      },
    },
  },
});

export { darkTheme };
