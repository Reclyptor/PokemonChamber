import { createTheme } from "@mui/material";

const NeonBlue = createTheme({
  palette: {
    primary: {
      main: "#181A1B",
      contrastText: "#8FFCFF",
    },
    secondary: {
      main: "#8FFCFF",
      contrastText: "#8FFCFF",
    },
    background: {
      default: "#181A1B",
      paper: "#0A1929",
    },
    text: {
      primary: "#8FFCFF",
    },
  },
});

export default NeonBlue;