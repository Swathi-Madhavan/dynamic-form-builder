import Paper from "@mui/material/Paper";
import CustomAppBar from "./CustomAppBar";
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import Preview from "../uicomponents/Preview";

export default function Templates() {
  return (
    <>
      <CustomAppBar />
      <Paper
        elevation={0}
        sx={{
          gap: "14px",
          padding: "24px",
          height: "100%",
          borderRadius: 1,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Create webapp</Typography>
          <Button
            startIcon={<AddCircleOutline />}
            variant="contained"
            color="primary"
            sx={{
              fontSize: "14px",
            }}
          >
            create template
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignContent="flex-start"
          sx={{ gap: "14px", mt: "14px" }}
        >
          <Preview />
        </Stack>
      </Paper>
    </>
  );
}
