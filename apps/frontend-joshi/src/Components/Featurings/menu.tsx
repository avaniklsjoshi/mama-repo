import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { IComponentDetails } from "./layout";
import { FEATURINGS } from "../../Configs/Constants/const";

const drawerWidth = 240;

export interface IMenu {
  activeComponent: (item: IComponentDetails) => void;
  routeName: string;
  window?: () => Window;
}

export default function Menu(props: IMenu) {
  type ObjectKey = keyof typeof FEATURINGS;
  const { routeName, activeComponent, window } = props;
  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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
  const drawer = (
    <>
      <IconButton
        style={{
          alignSelf: "baseline",
          margin: "0",
          padding: 0
        }}
        onClick={() => {
          handleDrawerClose();
          handleDrawerToggle();
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Divider />
      <List>
        {FEATURINGS[routeName as ObjectKey] &&
          FEATURINGS[routeName as ObjectKey].menu &&
          FEATURINGS[routeName as ObjectKey].menu.map(
            (item: IComponentDetails, index: number) => (
              <ListItem
                className="menu-item"
                disablePadding
                key={index}
                onClick={(e) => handleMenuClick(e, item)}
                data-testid="menu-click"
              >
                <ListItemButton>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            )
          )}
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {(!mobileOpen || !open) && (
        <IconButton
          className="left-drawer-menu-icon"
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            handleDrawerOpen();
            handleDrawerToggle();
          }}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Box
        className="left-menu-box"
        style={{ textAlign: "initial", height: "100%" }}
      >
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
              }
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        {open && (
          <Hidden xsDown implementation="css">
            <Drawer
              className="left-drawer"
              sx={{
                display: { xs: "none", sm: "block" },
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth
                }
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              {drawer}
            </Drawer>
          </Hidden>
        )}
      </Box>
    </>
  );
}
