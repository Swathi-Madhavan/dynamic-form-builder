import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography, Paper } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import Preview from "../uicomponents/Preview";

export default function Templates() {
  const navigate = useNavigate();

  const onCreateBtn = () => {
    navigate("/project?projectId=Basic");
  };

  return (
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
          onClick={onCreateBtn}
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
  );
}
