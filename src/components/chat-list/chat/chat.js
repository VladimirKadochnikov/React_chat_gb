import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, DeleteSweep } from "@mui/icons-material";
import styles from "./chat.module.css";
import { deleteConversation } from "../../../store/conversations";

export function Chat({ title, selected, dispatch }) {
  return (
    <ListItem
      className={styles.chat_list_item}
      button={true}
      selected={selected}
    >
      <DeleteSweep
        className={styles.delete}
        onClick={() => dispatch(deleteConversation(title))}
      />
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.chat_list_icon} />
      </ListItemIcon>
      <div className={styles.info}>
        <ListItemText className={styles.chat_list_text} primary={title} />
        <ListItemText className={styles.chat_list_text} />
      </div>
    </ListItem>
  );
}
