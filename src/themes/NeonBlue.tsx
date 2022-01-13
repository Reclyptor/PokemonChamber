import { createTheme } from "@mui/material";

const NeonBlue = createTheme({
  palette: {
    primary: {
      main: "#131516",
      contrastText: "#7EFCFF",
    },
    secondary: {
      main: "#7EFCFF",
      contrastText: "#7EFCFF",
    },
    background: {
      default: "#131516",
      paper: "#081421",
    },
    text: {
      primary: "#7EFCFF",
    },
    divider: "#7EFCFF",
  },
});

export default NeonBlue;