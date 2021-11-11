import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { ReactNode } from "react";

export const UrlPath = {
  home: "/",
  dashboar1: "/d1",
};

type DashBoardPath = {
  parentPath: string;
  href: string;
  title: string;
  icon: ReactNode;
};

type DashBoardPaths = {
  d1: DashBoardPath;
  d2: DashBoardPath;
};

const dashboardPath: DashBoardPaths = {
  d1: {
    parentPath: "dashboard",
    href: "d1",
    title: "test1",
    icon: AccountCircleIcon,
  },
  d2: {
    parentPath: "dashboard",
    href: "d2",
    title: "test2",
    icon: SettingsApplicationsIcon,
  },
};

export default { dashboardPath: dashboardPath };
