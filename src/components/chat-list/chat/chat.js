import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import styles from "./chat.module.css";

export function Chat({ title, selected, handleListItemClick }) {
  return (
    <ListItem
      className={styles.chat_list_item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.chat_list_icon} />
      </ListItemIcon>
      <div className={styles.info}>
        <ListItemText className={styles.chat_list_text} primary={title} />
        <ListItemText className={styles.chat_list_text} primary="00:00" />
      </div>
    </ListItem>
  );
}
