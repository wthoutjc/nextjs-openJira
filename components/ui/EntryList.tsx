import { useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";

// Types
import { EntryStatus } from "../../interfaces";

// Context
import { EntriesContext } from "../../context/entries";

interface Props {
  status: EntryStatus;
}

const EntryList: React.FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter(({ status: _status }) => _status === status),
    [entries, status]
  );

  return (
    // TODO: Acá se hará drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "auto",
          backgroundColor: "transparent",
          padding: 1,
        }}
      >
        {/* TODO: Cambiará dependiendo si esta haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus?.map((entry) => (
            <EntryCard key={entry._id} {...entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export { EntryList };
