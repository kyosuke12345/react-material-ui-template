import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { matchPath, useLocation } from "react-router";

export interface NavItemProps {
  /** リンク */
  href: string;
  /** タイトル */
  title: string;
}

/**
 * SideBarのアイテム
 * @param param0
 * @returns
 */
const NavItem: React.VFC<NavItemProps> = ({ href, title }) => {
  const location = useLocation();

  const active = href
    ? !!matchPath(
        {
          path: href,
          end: false,
        },
        location.pathname
      )
    : false;

  return (
    <ListItem selected={active}>
      <ListItemButton component="a" href={href}>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
