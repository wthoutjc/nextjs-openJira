import { GetServerSideProps } from "next";
import { useMemo, useState } from "react";
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from "@mui/material";

// Components
import { Layout } from "../../components/layouts";

// Icons
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// Interfaces
import { EntryStatus } from "../../interfaces";
import mongoose from "mongoose";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  id: string;
}

const EntryPage: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<EntryStatus>("pending");
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onStatusChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(target.value as EntryStatus);
  };

  const handleSave = () => {};

  return (
    <Layout title="l">
      <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entry: ${inputValue}`}
              subheader={`Created ... minutes ago`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="New Entry"
                autoFocus
                multiline
                label="New Entry"
                value={inputValue}
                onChange={onTextChange}
                helperText={isNotValid && "Ingrese un valor"}
                onBlur={() => setTouched(true)}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>Estado: </FormLabel>
                <RadioGroup row={true} value={status} onChange={onStatusChange}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={handleSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{ position: "fixed", bottom: 30, right: 30, background: "red" }}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  if (!mongoose.isValidObjectId(id)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      id,
    },
  };
};

export default EntryPage;
