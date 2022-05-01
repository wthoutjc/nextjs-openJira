import { useContext } from "react";
import NextLink from "next/link";

import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
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

        <NextLink href={"/"} passHref>
          <Link sx={{ textDecoration: "none", color: '#fff'}}>
            <Typography
              variant="h6"
              sx={{ userSelect: "none", cursor: "pointer" }}
            >
              OpenJira
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
