import * as React from "react";
import { Box } from "@mui/material";

export default function DivBox({ children }: React.PropsWithChildren) {
  return (
    <Box
      sx={{
        boxShadow:
          "rgb(255, 255, 255) 0px 2px 0px inset, rgba(232, 234, 238, 0.3) 0px -2px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px",
        borderRadius: "12px",
        border: "1px solid rgb(232, 234, 238)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "8px",
        width: "100%",
        padding: "8px",
      }}
    >
      {children}
    </Box>
  );
}
