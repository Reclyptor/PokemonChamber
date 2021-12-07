import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            color="secondary"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block", fontWeight: "bold" }, textShadow: "4px 4px 4px black, 0 0 0.2em black" }}
          >
            Pokemon Chamber
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;