import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function Preview() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow:
          "rgb(255, 255, 255) 0px 2px 0px inset, rgba(232, 234, 238, 0.3) 0px -2px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px",
        borderRadius: "12px",
        border: "1px solid rgb(232, 234, 238)",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Basic
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Basic webapp template. You can customize it, as per your need
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
