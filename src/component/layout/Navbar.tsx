import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as Logo } from "../../resources/logo/logo.svg";
import { IconButton } from "@mui/material";
import Drawer from "./Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { Pokedex } from "../../types/Pokedex";
import pokedexImg from "../../resources/pokedex/pokedex.png";

type NavbarProps = {
  pokedexes: Pokedex[];
  setPokedex(_: number): void;
};

const Navbar = (props: NavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton onClick={() => setIsDrawerOpen(true)} size="large"><MenuIcon color="secondary"/></IconButton>
          <Logo height={"5em"}/>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer width={320} isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
        <br/>
        <Typography noWrap fontWeight="bold" variant="h4" component="div" align="center">POKEDEX</Typography>
        <List>
          {props.pokedexes.map((pokedex) => (
            <ListItem button key={pokedex.id} onClick={() => props.setPokedex(pokedex.id)}>
              <ListItemIcon>
                <img height="35px" src={pokedexImg} alt="Pokedex" />
              </ListItemIcon>
              <Box>
                <Typography noWrap fontWeight="bold" variant="subtitle2" component="div" align="left">{pokedex.name}</Typography>
                <Typography gutterBottom noWrap variant="caption" component="div" align="left">{pokedex.region.name}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;