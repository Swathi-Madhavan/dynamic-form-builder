import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { BoardProps } from "../model/types";
import UIElement from "../uicomponents/UIElement";

export default function Board({ list }: BoardProps) {
  return (
    <Droppable droppableId="form_area" type="dropZone">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`list ${snapshot.isDraggingOver ? "dragging-over" : ""}`}
          style={{
            minWidth: "500px",
            minHeight: "752px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            cursor: "pointer",
            border: snapshot.isDraggingOver ? "1px dashed #5578f4" : "none",
            margin: "24px",
          }}
        >
          {list.map((item, index) => (
            <Draggable
              key={item.primaryKey}
              draggableId={item.primaryKey}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`item ${item.id} ${
                    snapshot.isDragging ? "dragging" : ""
                  }`}
                >
                  <UIElement {...item} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
