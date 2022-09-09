import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { IComponentDetails } from "./layout";
import { FEATURINGS } from "../../Configs/Constants/const";

export interface IMenu {
  activeComponent: (item: IComponentDetails) => void;
  routeName: string;
}

export default function Menu(props: IMenu) {
  type ObjectKey = keyof typeof FEATURINGS;
  const { routeName, activeComponent } = props;
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClick = (
    e: React.SyntheticEvent,
    item: IComponentDetails
  ) => {
    activeComponent(item);
  };

  return (
    <Box
      className="left-menu-box"
      style={{ textAlign: "initial", height: "100%" }}
    >
      <CssBaseline />
      <IconButton
        className="left-drawer-menu-icon"
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className="left-drawer"
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {FEATURINGS[routeName as ObjectKey].menu.map(
            (item: IComponentDetails, index: number) => (
              <ListItem
                disablePadding
                key={index}
                onClick={(e) => handleMenuClick(e, item)}
              >
                <ListItemButton>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}
