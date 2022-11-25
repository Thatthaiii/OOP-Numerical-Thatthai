import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material/";
import { Menu, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Layout = ({ links }) => {
  const navigate = useNavigate();
  const [stateDrawer, setDrawer] = React.useState(false);
  const [stateLink, setLink] = React.useState(links);
  const open = (index) => {
    const stateLinks = [...stateLink];
    stateLinks[index].open = !stateLinks[index].open;
    setLink(stateLinks);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawer(!stateDrawer)}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Numurical Methods
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={stateDrawer} onClose={() => setDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={() => setDrawer(false)}
        >
          <List>
            {stateLink.map((data, index) => (
              <div key={index}>
                <ListItemButton onClick={() => open(index)}>
                  <ListItemText primary={data.name} />
                  {data.open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={data.open} timeout="auto" unmountOnExit>
                  {data.links.map((link, index) => (
                    <List key={index} component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => navigate(link.link)}
                      >
                        <ListItemText primary={link.name} />
                      </ListItemButton>
                    </List>
                  ))}
                </Collapse>
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Layout;
