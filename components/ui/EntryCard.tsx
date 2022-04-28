import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

// Interfaces
import { Entry } from "../../interfaces";

const EntryCard: React.FC<Entry> = ({
  _id,
  createdAt,
  description,
  status,
}) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            Esto es la descripción
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">Hace 39m</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export { EntryCard };
