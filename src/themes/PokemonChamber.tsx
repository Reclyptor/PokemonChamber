import { createTheme } from "@mui/material";

const PokemonChamber = createTheme({
  // type: "dark",
  palette: {
    primary: {
      main: "rgba(240,0,0,0.8)",
      contrastText: "#000000",
    },
    secondary: {
      main: "#FFCB05",
    },
    background: {
      default: "#181A1B",
      paper: "#2B2B2B",
    },
    text: {
      primary: "#FFCB05",
    },
  },
});

export default PokemonChamber;