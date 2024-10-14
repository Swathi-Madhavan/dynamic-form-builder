import React from "react";
import { AllComponents } from "../data";
import { Box } from "@mui/material";
import UIComponentSections from "../uicomponents/UIComponentSections";

export default function ComponentsList() {
  return (
    <Box
      sx={{
        boxShadow:
          "rgb(255, 255, 255) 0px 2px 0px inset, rgba(232, 234, 238, 0.3) 0px -2px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px",
        borderRadius: "12px",
        border: "1px solid rgb(232, 234, 238)",
        minWidth: "300px",
        padding: "14px",
      }}
    >
      {AllComponents.map((item, index) => (
        <UIComponentSections key={item?.id} {...item} />
      ))}
    </Box>
  );
}
