import { useContext } from "react";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

// Interfaces
import { Entry } from "../../interfaces";
import { UIContext } from "../../context/ui";

const EntryCard: React.FC<Entry> = ({
  _id,
  createdAt,
  description,
  status,
}) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("text", _id);
    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{description}</Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">Hace 30m</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export { EntryCard };
