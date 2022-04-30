import { useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";

// Types
import { EntryStatus } from "../../interfaces";

// Context
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

// Styles
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

const EntryList: React.FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter(({ status: _status }) => _status === status),
    [entries, status]
  );

  const onDropEntry = (event: React.DragEvent) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status
    updateEntry(entry)
    endDragging()
  };

  const allowDrop = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    // TODO: Acá se hará drop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "auto",
          backgroundColor: "transparent",
          padding: 1,
        }}
      >
        <List sx={{ opacity: isDragging ? 0.3 : 1, transition: "all 0.3s" }}>
          {entriesByStatus?.map((entry) => (
            <EntryCard key={entry._id} {...entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export { EntryList };
