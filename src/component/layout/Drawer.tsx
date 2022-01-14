import React, {ReactNode} from "react";
import Box from "@mui/material/Box";
import { Drawer as MaterialDrawer } from "@mui/material";

type DrawerProps = {
  isOpen: boolean;
  setIsOpen(_: boolean): void;
  children: ReactNode;
  width?: number;
  anchor?: "left" | "right"
};

const Drawer = (props: DrawerProps) => {
  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      props.setIsOpen(open);
    };

  return (
    <div>
      <MaterialDrawer anchor={props.anchor || "left"} open={props.isOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: props.width || 250 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {props.children}
        </Box>
      </MaterialDrawer>
    </div>
  );
};

export default Drawer;