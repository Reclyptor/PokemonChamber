import React, { Fragment, ReactNode } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type BusyProps = {
  busy: boolean;
  children: ReactNode;
};

const Busy = (props: BusyProps) => {
  return (
    props.busy ?
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
        <CircularProgress size="12em" color="secondary" />
      </Box> : <Fragment>{props.children}</Fragment>
  );
};

export default Busy;