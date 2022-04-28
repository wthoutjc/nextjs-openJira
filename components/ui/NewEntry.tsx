import { useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { Button, Box, TextField } from "@mui/material";

const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const handleOpenAdding = () => {
    setIsAdding(true);
  };

  const handleCloseAdding = () => {
    setIsAdding(false);
  };

  const onTextChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    console.log(inputValue);
    
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            multiline
            label="Nueva entrada"
            helperText={
              inputValue.length <= 0 && touched
                ? "Datos no válidos"
                : "Ingrese un valor"
            }
            value={inputValue}
            onChange={onTextChange}
            error={inputValue.length <= 0 && touched}
            onBlur={() => setTouched(true)}
          />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button variant="text" onClick={handleCloseAdding}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant="outlined"
          fullWidth
          startIcon={<AddIcon />}
          onClick={handleOpenAdding}
        >
          Add entry
        </Button>
      )}
    </Box>
  );
};

export { NewEntry };
