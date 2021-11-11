import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import authModule from "redux/modules/authModule";
import { useDidMount } from "hooks/useDidMount";
import useMobile from "hooks/useMobile";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ConnectDashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { useDispatch } from "react-redux";

export const SIDE_MENU_WIDTH = 256;

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayoutWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    // NOTE:
    paddingLeft: SIDE_MENU_WIDTH,
  },
}));

const DashboardLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const DashboardLayoutContent = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
});

/** baseのtheme */
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  //   secondary: {
  //     main: green[500],
  //   },
  //   background: {
  //     default: "#ffffff",
  //   },
  // },
  // components: {
  //   MuiDrawer: {
  //     styleOverrides: {
  //       paper: {
  //         backgroundColor: "rgba(0, 0, 0, 0.87)",
  //         color: "white",
  //       },
  //     },
  //   },
  // },
});

const DashboardLayout: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useMobile();
  const dispatch = useDispatch();

  useDidMount(() => {
    dispatch(authModule.actions.login());
  });

  return (
    <ThemeProvider theme={theme}>
      <DashboardLayoutRoot>
        <ConnectDashboardNavbar
          isMobile={isMobile}
          openNav={() => setNavOpen(!navOpen)}
        />
        <DashboardSidebar
          isMobile={isMobile}
          openNav={navOpen}
          onCloseNav={() => setNavOpen(false)}
        />
        <DashboardLayoutWrapper>
          <DashboardLayoutContainer>
            <DashboardLayoutContent>
              <Outlet />
            </DashboardLayoutContent>
          </DashboardLayoutContainer>
        </DashboardLayoutWrapper>
      </DashboardLayoutRoot>
    </ThemeProvider>
  );
};

export default DashboardLayout;
