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
      <div style={{ position: "absolute", top: "40%", left: "calc(50% - 6em)" }}>
        <CircularProgress size="12em" color="secondary" />
      </div> : <Fragment>{props.children}</Fragment>
  );
};

export default Busy;