import { createTheme } from "@mui/material";


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          paddingLeft: 58,
          paddingRight: 58,
          fontSize: 14,
          textTransform: "inherit",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#00FF68",
      mainGradient: "linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)",
    },
    shape: {
      borderRadius: 16,
    },
  },
});

export default theme;
