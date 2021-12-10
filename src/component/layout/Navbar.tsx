import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ReactComponent as Logo } from "../../resources/logo/logo.svg";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo height={"5em"}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;