import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { UIComponentSectionsProps } from "../model/types";
import UIElement from "./UIElement";
import { Draggable, Droppable, DroppableProvided } from "react-beautiful-dnd";

export default function UIComponentSections({
  name,
  uiComponents,
}: Readonly<UIComponentSectionsProps>) {
  return (
    <Accordion
      sx={{
        boxShadow:
          "rgb(255, 255, 255) 0px 2px 0px inset, rgba(232, 234, 238, 0.3) 0px -2px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px",
        borderRadius: "12px",
        border: "1px solid rgb(232, 234, 238)",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {name}
      </AccordionSummary>
      <AccordionDetails
        sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <Droppable droppableId="add_fields" type="dropZone">
          {(provided: DroppableProvided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`list ${snapshot.isDraggingOver ? "dragging-over" : ""}`}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                cursor: "pointer",
              }}
            >
              {uiComponents?.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`item ${item.id} ${
                          snapshot.isDragging ? "dragging" : ""
                        }`}
                      >
                        <UIElement key={item?.id} {...item} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </AccordionDetails>
    </Accordion>
  );
}
