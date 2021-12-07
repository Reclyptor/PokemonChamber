import { createTheme } from "@mui/material";

const PokemonChamber = createTheme({
  // type: "dark",
  palette: {
    primary: {
      main: "#DF1818",
      contrastText: "#000000",
    },
    secondary: {
      main: "#FFCB05",
    },
    background: {
      default: "#121415",
      paper: "#2B2B2B",
    },
    text: {
      primary: "#858585",
    },
  },
});

export default PokemonChamber;