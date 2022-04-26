import { useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// Context
import { UIContext } from "../../context/ui";

const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position={"sticky"} elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6" sx={{ userSelect: "none" }}>
          OpenJira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
