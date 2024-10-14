import React from "react";
import { UIcomponentType } from "../model/types";
import { Typography } from "@mui/material";
import DivBox from "./DivBox";

export default function UIElement({ label }: Readonly<UIcomponentType>) {
  return (
    <DivBox>
      <Typography sx={{ fontSize: "12px" }}>{label}</Typography>
    </DivBox>
  );
}
