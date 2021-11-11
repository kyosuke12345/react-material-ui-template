import { Drawer, List, ModalProps } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import path from "utils/path";
import { SIDE_MENU_WIDTH } from "./DashboardLayout";
import NavItem from "./NavItem";

export type DashBoardSideBarProps = {
  isMobile: boolean;
  onCloseNav: ModalProps["onClose"];
  openNav: boolean;
};

const SideBarContent: ReactNode = (
  <Box>
    <List>
      {Object.values(path.dashboardPath).map((v, index) => (
        <NavItem key={index} href={v.href} title={v.title} />
      ))}
    </List>
  </Box>
);

/**
 * Dashboardのサイドバー
 * @param param0
 * @returns
 */
const DashboardSidebar: React.VFC<DashBoardSideBarProps> = ({
  isMobile,
  onCloseNav,
  openNav,
}) => {
  return (
    <>
      {isMobile ? (
        <Drawer
          anchor="left"
          onClose={onCloseNav}
          open={openNav}
          variant="temporary"
          PaperProps={{
            sx: {
              width: SIDE_MENU_WIDTH,
            },
          }}
        >
          {SideBarContent}
        </Drawer>
      ) : (
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: SIDE_MENU_WIDTH,
              // top: 64,
              // height: "calc(100% - 64px)",
            },
          }}
        >
          {SideBarContent}
        </Drawer>
      )}
    </>
  );
};

export default DashboardSidebar;
