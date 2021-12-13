import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { format } from "date-fns";
import { deleteMessageById } from "../../store/messages";
import { Delete } from "@mui/icons-material";
import styles from "./message-list.module.css";

export const Message = ({ message }) => {
  const dispatch = useDispatch();
  const { roomId } = useParams();

  return (
    <div
      className={classNames(styles.message, {
        [styles.bot_message]: message.author === "Bot",
      })}
    >
      <h2 className={styles.name}>{message.author}</h2>
      <p className={styles.text}>{message.message}</p>
      <p className={styles.time}>{message.date}</p>
      <Delete
        fontSize="small"
        className={styles.delete}
        onClick={() => dispatch(deleteMessageById(message.id, roomId))}
      />
    </div>
  );
};
