import { useSearchParams } from "react-router-dom";
import React, { useCallback } from "react";
import { Stack, Typography, Paper } from "@mui/material";
import ComponentsList from "../components/ComponentsList";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import Board from "../components/Board";

export default function CreateTemplate() {
  let [searchParams] = useSearchParams();

  const onDragEnd = useCallback(
    (result: DropResult, provided: ResponderProvided) => {
      //
    },
    []
  );

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
        <Typography variant="h5">
          {searchParams.get("projectId")} template
        </Typography>
      </Stack>
      <DragDropContext onDragEnd={onDragEnd}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignContent="flex-start"
          sx={{ gap: "14px", mt: "14px", flex: 1, width: "100%" }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              flex: 5,
              width: "100%",
            }}
          >
            <Board list={[]} />
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              width: "100%",
            }}
          >
            <ComponentsList />
          </Stack>
        </Stack>
      </DragDropContext>
    </Paper>
  );
}
