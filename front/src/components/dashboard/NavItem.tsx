import {
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { matchPath, useLocation } from "react-router";
import { Link } from "react-router-dom";

export interface NavItemProps {
  /** url */
  url: string;
  /** リンク */
  href: string;
  /** タイトル */
  title: string;
  /** クリック時の挙動 */
  onClickNav: () => void;
}

/**
 * SideBarのアイテム
 * @param param0
 * @returns
 */
const NavItem: React.VFC<NavItemProps> = ({ url, href, title, onClickNav }) => {
  const location = useLocation();
  const theme = useTheme();

  const active = url
    ? !!matchPath(
        {
          path: url,
          end: false,
        },
        location.pathname
      )
    : false;

  return (
    <Link
      to={href}
      style={{ textDecoration: "none", color: theme.palette.text.primary }}
      onClick={() => onClickNav()}
    >
      <ListItem selected={active}>
        <ListItemButton>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default NavItem;
