import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export function Chat({ title, selected, handleListItemClick }) {
  return (
    <ListItem
      className=""
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className="" />
      </ListItemIcon>
      <div className="">
        <ListItemText className="" primary={title} />
        <ListItemText className="" primary="00:00" />
      </div>
    </ListItem>
  );
}
